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

interface AddressValue {
  provinceId?: string;
  districtId?: string;
  wardId?: string;
  addressDetail?: string;
  lat?: number;
  lng?: number;
}

interface PropsType {
  provinceLabel?: string;
  districtLabel?: string;
  wardLabel?: string;
  selectClass?: string;
  isShowAddressSelect?: boolean;
  isShowAddressMap?: boolean;
  name: string;
  required?: boolean;
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
}: PropsType) {
  const { watch, setValue } = useFormContext();

  const formValues = watch(name) || {};
  const provinceId = formValues.provinceId;
  const districtId = formValues.districtId;
  const wardId = formValues.wardId;
  const addressDetail = formValues.addressDetail;

  // State cho options
  const [provinceOptions, setProvinceOptions] = useState<SelectOption[]>([]);
  const [districtOptions, setDistrictOptions] = useState<SelectOption[]>([]);
  const [wardOptions, setWardOptions] = useState<SelectOption[]>([]);

  // GraphQL queries
  const [getProvinces] = useLazyQuery(GetProvinceDocument);
  const [getDistricts] = useLazyQuery(GetDistrictDocument);
  const [getWards] = useLazyQuery(GetWardDocument);

  // Load provinces on mount
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

  // Load districts when province changes
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
      // Reset district và ward khi province thay đổi
      setValue(`${name}.districtId`, "");
      setValue(`${name}.wardId`, "");
    } else {
      setDistrictOptions([]);
    }
  }, [provinceId, getDistricts, name, setValue]);

  // Load wards when district changes
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
      // Reset ward khi district thay đổi
      setValue(`${name}.wardId`, "");
    } else {
      setWardOptions([]);
    }
  }, [districtId, getWards, name, setValue]);

  const selectConfig = {
    className: `w-full ${selectClass}`,
    closeOnSelect: true,
  };

  const handleLocationChange = useCallback(
    (locationData: any) => {
      setValue(name, {
        ...formValues,
        addressDetail: locationData.address,
        lat: locationData.lat,
        lng: locationData.lng,
        provinceId: locationData.provinceId || provinceId,
        districtId: locationData.districtId || districtId,
        wardId: locationData.wardId || wardId,
      });
    },
    [name, setValue, formValues, provinceId, districtId, wardId]
  );

  return (
    <div>
      {isShowAddressSelect && (
        <>
          <div className="mb-3">
            <Field
              name={`${name}.provinceId`}
              label={provinceLabel}
              required={required}
            >
              <Select
                {...selectConfig}
                placeholder="Chọn tỉnh/thành"
                options={provinceOptions}
                value={provinceId}
              />
            </Field>
          </div>

          <div className="mb-3">
            <Field
              name={`${name}.districtId`}
              label={districtLabel}
              required={required}
            >
              <Select
                {...selectConfig}
                placeholder="Chọn quận/huyện"
                options={districtOptions}
                value={districtId}
                disabled={!provinceId}
              />
            </Field>
          </div>

          <div className="mb-3">
            <Field
              name={`${name}.wardId`}
              label={wardLabel}
              required={required && wardOptions.length > 0}
            >
              <Select
                {...selectConfig}
                placeholder="Chọn phường/xã"
                options={wardOptions}
                value={wardId}
                disabled={!districtId}
              />
            </Field>
          </div>
        </>
      )}

      {isShowAddressMap && (
        <div className="mb-3">
          <Field
            name={`${name}.addressDetail`}
            label="Địa chỉ cụ thể"
            required={required}
          >
            <InputLocation
              provinceId={provinceId}
              districtId={districtId}
              wardId={wardId}
              provinceOptions={provinceOptions}
              districtOptions={districtOptions}
              wardOptions={wardOptions}
              addressDetail={addressDetail}
              onChange={handleLocationChange}
            />
          </Field>
        </div>
      )}
    </div>
  );
}
