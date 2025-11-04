import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Input, List, Sheet } from "zmp-ui";
import { FaTimes } from "react-icons/fa";
import { RiMap2Line, RiSearchLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import debounce from "lodash/debounce";
import { appZaloMiniAppConfig } from "@/components/shared/config";

interface InputLocationProps {
  readonly onChange?: (value: {
    address: string;
    lat?: number;
    lng?: number;
    provinceId?: string;
    districtId?: string;
    wardId?: string;
  }) => void;
  readonly provinceId?: string;
  readonly districtId?: string;
  readonly wardId?: string;
  readonly provinceOptions?: { value: string; label: string }[];
  readonly districtOptions?: { value: string; label: string }[];
  readonly wardOptions?: { value: string; label: string }[];
  readonly addressDetail?: string;
  readonly lat?: number;
  readonly lng?: number;
  readonly title?: string;
  rightMap?: any;
  isError?: boolean;
  elementHidden?: string;
}

const googleMapApiKey = appZaloMiniAppConfig.googleMapApiKey;
const mapId = appZaloMiniAppConfig.mapId;

// Set options một lần duy nhất ở global scope
setOptions({
  key: googleMapApiKey,
  libraries: ["places", "geocoding", "marker"],
  language: "vi",
  region: "VN",
});

export const InputLocation: React.FC<InputLocationProps> = ({
  onChange,
  provinceId,
  districtId,
  wardId,
  provinceOptions = [],
  districtOptions = [],
  wardOptions = [],
  addressDetail = "",
  lat: externalLat,
  lng: externalLng,
  title,
  rightMap,
  isError = false,
  elementHidden,
}) => {
  const [value, setValue] = useState<string>(addressDetail);
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleMap, setVisibleMap] = useState<boolean>(false);
  const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>(
    externalLat && externalLng ? { lat: externalLat, lng: externalLng } : null
  );
  const [isAddressSelected, setIsAddressSelected] = useState<boolean>(false);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [isApiLoaded, setIsApiLoaded] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isMapInitialized, setIsMapInitialized] = useState<boolean>(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );
  const sessionTokenRef =
    useRef<google.maps.places.AutocompleteSessionToken | null>(null);

  // Khởi tạo Google Maps API
  const initializeGoogleMaps = useCallback(async () => {
    try {
      console.log("Initializing Google Maps API...");

      // Import các libraries cần thiết
      const [maps, places, geocoding, marker] = await Promise.all([
        importLibrary("maps"),
        importLibrary("places"),
        importLibrary("geocoding"),
        importLibrary("marker"),
      ]);

      setIsApiLoaded(true);

      // Khởi tạo session token
      sessionTokenRef.current =
        new google.maps.places.AutocompleteSessionToken();

      console.log("Google Maps API initialized successfully");
      return { maps, places, geocoding, marker };
    } catch (error) {
      console.error("Error initializing Google Maps API:", error);
      setError("Không thể tải bản đồ. Vui lòng kiểm tra API key và thử lại.");
      return null;
    }
  }, []);

  // Initialize Google Maps API khi component mount
  useEffect(() => {
    initializeGoogleMaps();
  }, [initializeGoogleMaps]);

  // Initialize map khi sheet mở
  const initializeMap = useCallback(async () => {
    if (isMapInitialized || !mapRef.current) return;

    try {
      console.log("Initializing map...");

      const libraries = await initializeGoogleMaps();
      if (!libraries) return;

      const { maps, marker } = libraries;

      // Initialize map
      mapInstance.current = new maps.Map(mapRef.current!, {
        center: { lat: 10.776, lng: 106.7 },
        zoom: 13,
        mapId: mapId,
        streetViewControl: false,
        fullscreenControl: false,
      });

      // Thêm click listener
      mapInstance.current.addListener(
        "click",
        async (event: google.maps.MapMouseEvent) => {
          const lat = event.latLng?.lat();
          const lng = event.latLng?.lng();

          if (lat && lng) {
            await handleMapClick(lat, lng);
          }
        }
      );

      // Nếu có latLng từ trước, set marker
      if (latLng) {
        setMarker(latLng.lat, latLng.lng, marker);
      }

      setIsMapInitialized(true);
      console.log("Map initialized successfully");
    } catch (error) {
      console.error("Error initializing map:", error);
      setError("Không thể khởi tạo bản đồ.");
    }
  }, [isMapInitialized, latLng, initializeGoogleMaps]);

  const setMarker = (lat: number, lng: number, markerLibrary?: any) => {
    if (!mapInstance.current) return;

    // Remove existing marker
    if (markerRef.current) {
      markerRef.current.map = null;
    }

    // Sử dụng AdvancedMarkerElement
    const markerLib = markerLibrary || window.google?.maps?.marker;

    if (markerLib) {
      markerRef.current = new markerLib.AdvancedMarkerElement({
        map: mapInstance.current,
        position: { lat, lng },
        title: "Vị trí đã chọn",
      });
    }

    mapInstance.current.setCenter({ lat, lng });
    mapInstance.current.setZoom(15);
  };

  // Handle map click
  const handleMapClick = useCallback(
    async (lat: number, lng: number) => {
      if (!mapInstance.current) return;

      setLatLng({ lat, lng });
      setIsAddressSelected(true);

      // Update marker
      if (markerRef.current) {
        markerRef.current.map = null;
      }

      const markerLib = window.google?.maps?.marker;
      if (markerLib) {
        markerRef.current = new markerLib.AdvancedMarkerElement({
          map: mapInstance.current,
          position: { lat, lng },
          title: "Vị trí đã chọn",
        });
      }

      // Reverse geocoding
      try {
        const geocoder = new google.maps.Geocoder();
        const results = await geocoder.geocode({ location: { lat, lng } });

        if (results.results[0]) {
          const address = results.results[0].formatted_address;
          setValue(address);

          onChange?.({
            address,
            lat,
            lng,
            provinceId,
            districtId,
            wardId,
          });
        } else {
          setError("Không tìm thấy địa chỉ cho vị trí này.");
        }
      } catch (error) {
        console.error("Geocoding failed:", error);
        setError("Không thể lấy địa chỉ từ vị trí đã chọn.");
      }
    },
    [onChange, provinceId, districtId, wardId]
  );

  // Khởi tạo map khi sheet mở
  useEffect(() => {
    if (visibleMap && !isMapInitialized) {
      initializeMap();
    }
  }, [visibleMap, isMapInitialized, initializeMap]);

  // Update map khi sheet mở và đã được khởi tạo
  useEffect(() => {
    if (visibleMap && mapInstance.current && mapRef.current) {
      setTimeout(() => {
        google.maps.event.trigger(mapInstance.current!, "resize");

        if (latLng) {
          mapInstance.current!.setCenter(latLng);
          mapInstance.current!.setZoom(15);
        } else {
          mapInstance.current!.setCenter({ lat: 10.776, lng: 106.7 });
          mapInstance.current!.setZoom(13);
        }
      }, 300);
    }
  }, [visibleMap, latLng]);

  // Update khi external props thay đổi
  useEffect(() => {
    setValue(addressDetail);
    if (externalLat && externalLng) {
      setLatLng({ lat: externalLat, lng: externalLng });
      setIsAddressSelected(true);

      if (isMapInitialized && mapInstance.current) {
        setMarker(externalLat, externalLng);
      }
    } else {
      setLatLng(null);
      setIsAddressSelected(false);
      if (markerRef.current && isMapInitialized) {
        markerRef.current.map = null;
      }
    }
  }, [addressDetail, externalLat, externalLng, isMapInitialized]);

  // Handle element hidden
  useEffect(() => {
    if (elementHidden) {
      const element = document.getElementById(elementHidden);
      if (element) {
        if (visible || visibleMap) {
          element.style.display = "none";
        } else {
          element.style.display = "block";
        }
      }
    }
  }, [visible, visibleMap, elementHidden]);

  // Debounced search với AutocompleteSuggestion
  const debouncedSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
          setPredictions([]);
          return;
        }

        // Kiểm tra API đã sẵn sàng
        if (!isApiLoaded || !sessionTokenRef.current) {
          console.warn("Google Maps API not ready");
          return;
        }

        try {
          setIsSearching(true);

          // Tạo region từ các options
          const regionParts = [
            provinceOptions.find((opt) => opt.value === provinceId)?.label,
            districtOptions.find((opt) => opt.value === districtId)?.label,
            wardOptions.find((opt) => opt.value === wardId)?.label,
          ].filter(Boolean);

          const region = regionParts.join(", ");
          const searchQuery = region ? `${query}, ${region}` : query;

          // Sử dụng AutocompleteSuggestion API mới
          const response =
            await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
              {
                input: searchQuery,
                sessionToken: sessionTokenRef.current,
                includedRegionCodes: ["vn"],
                language: "vi",
              }
            );

          if (response.suggestions) {
            const formattedPredictions = response.suggestions.map(
              (suggestion, index) => ({
                place_id:
                  suggestion.placePrediction?.placeId ||
                  `suggestion_${index}_${Date.now()}`,
                description: suggestion.placePrediction?.text?.text || "",
                structured_formatting: {
                  main_text: suggestion.placePrediction?.text?.text || "",
                  secondary_text: "",
                },
              })
            );

            setPredictions(formattedPredictions);
          } else {
            setPredictions([]);
          }

          setIsSearching(false);
        } catch (error) {
          console.error("Search error:", error);
          setPredictions([]);
          setIsSearching(false);
        }
      }, 500),
    [
      isApiLoaded,
      provinceId,
      districtId,
      wardId,
      provinceOptions,
      districtOptions,
      wardOptions,
    ]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setValue(inputValue);

      if (error) setError(null);

      debouncedSearch(inputValue);
    },
    [debouncedSearch, error]
  );

  const handlePlaceSelected = useCallback(
    async (prediction: any) => {
      if (!prediction.description) return;

      setValue(prediction.description);
      setVisible(false);
      setIsAddressSelected(true);
      setPredictions([]);

      try {
        setIsSearching(true);

        // Sử dụng Place API mới để lấy chi tiết
        const place = new google.maps.places.Place({
          id: prediction.place_id,
          requestedLanguage: "vi",
        });

        const placeDetails = await place.fetchFields({
          fields: ["location", "formattedAddress"],
        });

        if (placeDetails.place?.location) {
          const location = placeDetails.place.location;
          const lat = location.lat();
          const lng = location.lng();
          const address =
            placeDetails.place.formattedAddress || prediction.description;

          setLatLng({ lat, lng });

          onChange?.({
            address,
            lat,
            lng,
            provinceId,
            districtId,
            wardId,
          });

          // Update map nếu đang mở
          if (mapInstance.current && isMapInitialized) {
            const markerLib = window.google?.maps?.marker;
            setMarker(lat, lng, markerLib);
          }
        } else {
          // Fallback: sử dụng Geocoding API
          const geocoder = new google.maps.Geocoder();
          const results = await geocoder.geocode({
            address: prediction.description,
            componentRestrictions: { country: "vn" },
          });

          if (results.results[0]) {
            const location = results.results[0].geometry.location;
            const lat = location.lat();
            const lng = location.lng();

            setLatLng({ lat, lng });

            onChange?.({
              address: prediction.description,
              lat,
              lng,
              provinceId,
              districtId,
              wardId,
            });

            if (mapInstance.current && isMapInitialized) {
              const markerLib = window.google?.maps?.marker;
              setMarker(lat, lng, markerLib);
            }
          } else {
            setError("Không thể lấy tọa độ cho địa chỉ này.");
          }
        }

        setIsSearching(false);

        // Tạo session token mới
        sessionTokenRef.current =
          new google.maps.places.AutocompleteSessionToken();
      } catch (error) {
        console.error("Error getting place details:", error);
        setError("Không thể lấy chi tiết địa chỉ.");
        setIsSearching(false);
      }
    },
    [onChange, provinceId, districtId, wardId, isMapInitialized]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          {title && <div className="text-sm font-medium">{title}</div>}
          <div className="flex items-center gap-x-1">
            <i
              className="text-xl text-danger"
              onClick={() => setVisibleMap(true)}
            >
              <RiMap2Line />
            </i>
            {rightMap}
          </div>
        </div>

        <textarea
          placeholder="Chọn địa chỉ..."
          className={`w-full px-3 py-2 min-h-20 mt-2 resize-none text-sm rounded-lg border ${
            isError ? "border-red-500" : "border-neutral-200"
          }`}
          value={value}
          onClick={() => setVisible(true)}
          readOnly
          aria-label="Selected address"
        />

        {error && (
          <span className="text-red-500 text-sm mt-1 block">{error}</span>
        )}

        {!isApiLoaded && (
          <span className="text-blue-500 text-sm mt-1 block">
            Đang tải bản đồ...
          </span>
        )}
      </div>

      {/* Search Sheet */}
      <Sheet
        height="75%"
        className="flex flex-col"
        visible={visible}
        onClose={() => {
          setVisible(false);
          setPredictions([]);
        }}
      >
        <div className="px-3 border-b border-neutral-200">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-base font-medium">Tìm kiếm địa chỉ</span>
            <i
              onClick={() => {
                setVisible(false);
                setPredictions([]);
              }}
            >
              <FaTimes size={20} />
            </i>
          </div>
        </div>

        <div className="px-3 flex-1 flex flex-col overflow-hidden">
          <Input
            style={{ color: "black" }}
            value={value}
            placeholder="Nhập địa chỉ..."
            onChange={handleInputChange}
            className="h-11 text-sm mt-3"
            prefix={<RiSearchLine className="pl-2" size={24} />}
            clearable
            aria-label="Tìm kiếm địa chỉ"
          />

          {isSearching && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Đang tìm kiếm...
            </div>
          )}

          <List
            className="mt-4 flex-1 overflow-y-auto"
            dataSource={predictions}
            renderItem={(item: any) => (
              <List.Item
                className="text-sm px-1 py-3 hover:bg-gray-50 border-b border-gray-100"
                key={item.place_id}
                onClick={() => handlePlaceSelected(item)}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <IoLocationOutline className="text-danger" size={20} />
                  </div>
                  <span className="text-sm ml-2">{item.description}</span>
                </div>
              </List.Item>
            )}
          />
        </div>
      </Sheet>

      <Sheet
        height="75%"
        className="flex flex-col"
        visible={visibleMap}
        onClose={() => setVisibleMap(false)}
      >
        <div className="px-3 border-b border-neutral-200">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-base font-medium">
              Chọn địa chỉ trên bản đồ
            </span>
            <i onClick={() => setVisibleMap(false)}>
              <FaTimes size={20} />
            </i>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {!isApiLoaded ? (
            <div className="flex-1 flex items-center justify-center">
              <span className="text-gray-500">Đang tải bản đồ...</span>
            </div>
          ) : (
            <div
              ref={mapRef}
              className="flex-1 w-full"
              aria-label="Bản đồ chọn địa chỉ"
            />
          )}
        </div>
      </Sheet>
    </>
  );
};

export default InputLocation;
