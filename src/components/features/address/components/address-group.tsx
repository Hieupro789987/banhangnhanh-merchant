import { useEffect, useState, useMemo, useCallback } from "react";
import debounce from "lodash/debounce";
import { useFormContext } from "react-hook-form";
import {
  GetDistrictDocument,
  GetProvinceDocument,
  GetWardDocument,
} from "@/generated/graphql";
import { useLazyQuery } from "@apollo/client/react";
import InputLocation from "@/components/features/address/components/input-location";
import Select, { SelectOption } from "@/components/shared/common/select";
import { Field } from "@/components/shared/common/form/field";

interface PropsType {
  provinceLabel?: string;
  districtLabel?: string;
  wardLabel?: string;
  selectClass?: string;
  isShowAddressSelect?: boolean | null;
  isShowAddressMap?: boolean | null;
  name: string;
  required?: boolean;
  elementHidden?: string;
}

export function AddressGroup({
  provinceLabel = "Tỉnh/Thành",
  districtLabel = "Quận/Huyện",
  wardLabel = "Phường/Xã",
  selectClass = "",
  isShowAddressSelect = true,
  isShowAddressMap = true,
  name,
  required = false,
  elementHidden,
}: PropsType) {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  console.log("errors: ", errors);

  const provinceId = watch(`provinceId`);
  const districtId = watch(`districtId`);
  const wardId = watch(`wardId`);
  const addressDetail = watch(`addressDetail`);
  const lat = watch(`lat`);
  const lng = watch(`lng`);

  const [provinceOptions, setProvinceOptions] = useState<SelectOption[]>([]);
  const [districtOptions, setDistrictOptions] = useState<SelectOption[]>([]);
  const [wardOptions, setWardOptions] = useState<SelectOption[]>([]);

  const [getProvinces, { loading: loadingProvinces }] =
    useLazyQuery(GetProvinceDocument);
  const [getDistricts, { loading: loadingDistricts }] =
    useLazyQuery(GetDistrictDocument);
  const [getWards, { loading: loadingWards }] = useLazyQuery(GetWardDocument);

  useEffect(() => {
    if (isShowAddressSelect) {
      getProvinces().then((result) => {
        if (result.data?.getProvince) {
          const options = result.data.getProvince.map((x) => ({
            value: x?.id!,
            label: (x?.province || x?.name || "") as string,
          }));
          setProvinceOptions(options);
        }
      });
    }
  }, [getProvinces, isShowAddressSelect]);

  useEffect(() => {
    if (provinceId) {
      getDistricts({ variables: { provinceId } }).then((result) => {
        if (result.data?.getDistrict) {
          const options = result.data.getDistrict.map((x) => ({
            value: x?.id!,
            label: (x?.district || x?.name || "") as string,
          }));
          setDistrictOptions(options);
        }
      });

      setValue(`districtId`, "");
      setValue(`wardId`, "");
      setValue(name, "");
    } else {
      setDistrictOptions([]);
      setValue(name, "");
    }
  }, [provinceId, getDistricts, setValue, name]);

  useEffect(() => {
    if (districtId) {
      getWards({ variables: { districtId } }).then((result) => {
        if (result.data?.getWard) {
          const options = result.data.getWard.map((x) => ({
            value: x?.id!,
            label: (x?.ward || x?.name || "") as string,
          }));
          setWardOptions(options);
        }
      });

      setValue(`wardId`, "");
      setValue(name, "");
    } else {
      setWardOptions([]);
      setValue(name, "");
    }
  }, [districtId, getWards, setValue, name]);

  useEffect(() => {
    const provinceName =
      provinceOptions.find((p) => p.value === provinceId)?.label || "";
    const districtName =
      districtOptions.find((d) => d.value === districtId)?.label || "";
    const wardName = wardOptions.find((w) => w.value === wardId)?.label || "";

    if (isShowAddressSelect && !isShowAddressMap) {
      if (provinceName && districtName && wardName) {
        const fullAddress = `${wardName}, ${districtName}, ${provinceName}`;

        setValue(name, fullAddress);
      } else {
        setValue(name, "");
      }
    } else if (!isShowAddressSelect && isShowAddressMap) {
      if (addressDetail) {
        setValue(name, addressDetail);
      } else {
        setValue(name, "");
      }
    } else if (isShowAddressSelect && isShowAddressMap) {
      if (addressDetail && provinceName && districtName && wardName) {
        setValue(name, addressDetail);
      } else {
        setValue(name, "");
      }
    }
  }, [
    provinceId,
    districtId,
    wardId,
    addressDetail,
    provinceOptions,
    districtOptions,
    wardOptions,
    setValue,
    name,
    isShowAddressSelect,
    isShowAddressMap,
  ]);

  const selectConfig = {
    className: `w-full ${selectClass}`,
    closeOnSelect: true,
  };

  const handleLocationChange = useCallback(
    (locationData: {
      address: string;
      lat?: number;
      lng?: number;
      provinceId?: string;
      districtId?: string;
      wardId?: string;
    }) => {
      setValue(`addressDetail`, locationData.address);
      setValue(`lat`, locationData.lat);
      setValue(`lng`, locationData.lng);

      if (isShowAddressSelect) {
        if (locationData.provinceId) {
          setValue(`provinceId`, locationData.provinceId);
        }
        if (locationData.districtId) {
          setValue(`districtId`, locationData.districtId);
        }
        if (locationData.wardId) {
          setValue(`wardId`, locationData.wardId);
        }
      }

      if (!isShowAddressSelect && isShowAddressMap) {
        setValue(name, locationData.address);
      } else if (isShowAddressSelect && isShowAddressMap) {
        const provinceName =
          provinceOptions.find((p) => p.value === locationData.provinceId)
            ?.label || "";
        const districtName =
          districtOptions.find((d) => d.value === locationData.districtId)
            ?.label || "";
        const wardName =
          wardOptions.find((w) => w.value === locationData.wardId)?.label || "";

        if (locationData.address && provinceName && districtName && wardName) {
          setValue(name, locationData.address);
        }
      }
    },
    [
      setValue,
      name,
      provinceOptions,
      districtOptions,
      wardOptions,
      isShowAddressSelect,
      isShowAddressMap,
    ]
  );

  const handleProvinceChange = (value: string) => {
    setValue(`provinceId`, value);
  };

  const handleDistrictChange = (value: string) => {
    setValue(`districtId`, value);
  };

  const handleWardChange = (value: string) => {
    setValue(`wardId`, value);
  };

  const shouldRequireWard = required && wardOptions.length > 0;

  return (
    <div>
      {isShowAddressSelect && (
        <>
          <div>
            <Field
              name={`provinceId`}
              label={provinceLabel}
              required={required}
            >
              <Select
                {...selectConfig}
                placeholder="Chọn tỉnh/thành"
                options={provinceOptions}
                value={provinceId}
                onChange={handleProvinceChange}
                disabled={loadingProvinces}
              />
            </Field>
          </div>

          <div>
            <Field
              name={`districtId`}
              label={districtLabel}
              required={required}
            >
              <Select
                {...selectConfig}
                placeholder="Chọn quận/huyện"
                options={districtOptions}
                value={districtId}
                onChange={handleDistrictChange}
                disabled={!provinceId || loadingDistricts}
              />
            </Field>
          </div>

          <div>
            <Field
              name={`wardId`}
              label={wardLabel}
              required={shouldRequireWard}
            >
              <Select
                {...selectConfig}
                placeholder="Chọn phường/xã"
                options={wardOptions}
                value={wardId}
                onChange={handleWardChange}
                disabled={!districtId || loadingWards}
              />
            </Field>
          </div>
        </>
      )}

      {isShowAddressMap && (
        <div className="mb-3">
          <Field name={name} required={required}>
            <InputLocation
              title="Địa chỉ cụ thể"
              elementHidden={elementHidden}
              provinceId={provinceId}
              districtId={districtId}
              wardId={wardId}
              provinceOptions={provinceOptions}
              districtOptions={districtOptions}
              wardOptions={wardOptions}
              addressDetail={addressDetail}
              lat={lat}
              lng={lng}
              onChange={handleLocationChange}
            />
          </Field>
        </div>
      )}
    </div>
  );
}
