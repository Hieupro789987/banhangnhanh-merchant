import { useEffect, useState } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCloseLine,
  RiImageLine,
  RiImageAddLine,
} from "react-icons/ri";
import { chooseImage } from "zmp-sdk";
import toast from "react-hot-toast";
import { GenerateUploadUrlDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client/react";
import { uploadToS3 } from "@/components/shared/utils/s3";
import { Label } from "@/components/shared/common/form/label";
import { Button, Spinner } from "zmp-ui";
import { Img } from "@/components/shared/common/img";

interface ImageUploadProps {
  multi?: boolean;
  maxImage?: number;
  cols?: number;
  compress?: number;
  ratio169?: boolean;
  avatar?: boolean;
  contain?: boolean;
  checkerboard?: boolean;
  onChange?: (images: string | string[]) => void;
  className?: string;
  label?: string;
  defaultValue?: string | string[] | null;
  required?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  multi = false,
  maxImage = 5,
  cols = 4,
  compress = 200,
  ratio169 = false,
  avatar = false,
  contain = false,
  checkerboard = false,
  onChange,
  className = "",
  label = "",
  defaultValue = null,
  required = false,
}) => {
  const [images, setImages] = useState<string | string[]>(multi ? [] : "");
  const [uploading, setUploading] = useState(false);
  const [viewerVisible, setViewerVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [generateUploadUrl] = useMutation(GenerateUploadUrlDocument);

  useEffect(() => {
    if (defaultValue) {
      setImages(defaultValue);
    }
  }, [defaultValue]);

  const handleChooseImage = async () => {
    try {
      const { filePaths } = await chooseImage({
        sourceType: ["album", "camera"],
        count: multi ? maxImage : 1,
      });

      setUploading(true);
      if (filePaths.length === 0) return;

      if (
        multi &&
        Array.isArray(images) &&
        images.length + filePaths.length > maxImage
      ) {
        toast.error(`Hình ảnh đính kèm không vượt quá ${maxImage} ảnh`);
        return;
      }

      const uploadTasks = filePaths.map(async (path: string) => {
        const response = await fetch(path);
        const file = await response.blob();

        const { data } = await generateUploadUrl({
          variables: { contentType: file.type },
        });

        await uploadToS3(file, data?.generateUploadUrl?.presignedUrl);
        return data?.generateUploadUrl?.url || "";
      });

      const uploadedUrls: string[] = await Promise.all(uploadTasks);

      if (multi) {
        const newImages: string[] = [
          ...(Array.isArray(images) ? images : []),
          ...uploadedUrls,
        ];
        setImages(newImages);
        onChange?.(newImages);
      } else {
        if (uploadedUrls[0]) {
          setImages(uploadedUrls[0]);
          onChange?.(uploadedUrls[0]);
        }
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Upload ảnh thất bại. Vui lòng thử lại.");
    } finally {
      setUploading(false);
    }
  };

  const handleOpenViewer = (index: number) => {
    setActiveIndex(index);
    setViewerVisible(true);
  };

  const handleCloseViewer = () => {
    setViewerVisible(false);
  };

  const handleMoveImage = (index: number, direction: number) => {
    if (!Array.isArray(images)) return;
    const newImages = [...images];
    const newIndex = index + direction;

    if (newIndex >= 0 && newIndex < newImages.length) {
      [newImages[index], newImages[newIndex]] = [
        newImages[newIndex],
        newImages[index],
      ];
      setImages(newImages);
      onChange?.(newImages);
    }
  };

  const handleDeleteImage = (index: number) => {
    if (Array.isArray(images)) {
      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);
      onChange?.(newImages);
    } else {
      setImages("");
      onChange?.("");
    }
  };

  const currentImages = Array.isArray(images) ? images : images ? [images] : [];

  return (
    <div className={`${className}`}>
      {label && <Label text={label} required={required} />}

      {!multi && (
        <div className="space-y-3">
          {!!currentImages?.[0] ? (
            <div className="relative inline-block">
              <div className="relative">
                <Img
                  src={currentImages[0]}
                  alt="Uploaded image"
                  contain={contain}
                  className={`
                    border border-gray-300 rounded-lg
                    ${avatar ? "h-24 w-24 rounded-full" : "h-32 w-32"}
                    transition-all duration-200
                  `}
                  onClick={() => handleOpenViewer(0)}
                />
                <button
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteImage(0);
                  }}
                >
                  <RiCloseLine size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`
                border border-dashed border-gray-300 rounded-lg cursor-pointer
                ${avatar ? "h-24 w-24 rounded-full" : "h-32 w-32"}
                flex flex-col items-center justify-center transition-all duration-200
                hover:border-blue-500 hover:bg-blue-50
              `}
              onClick={handleChooseImage}
            >
              {uploading ? (
                <Spinner />
              ) : (
                <>
                  <RiImageAddLine size={20} className="text-gray-400 mb-1" />
                  <span className="text-xs text-gray-500">Thêm ảnh</span>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {multi && (
        <div className="space-y-4">
          {currentImages.length > 0 && (
            <div className={`grid gap-3 grid-cols-3`}>
              {currentImages.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="relative">
                    <Img
                      src={image}
                      alt={`Uploaded ${index + 1}`}
                      className={`
                        w-full border border-gray-300 rounded-lg cursor-pointer
                        aspect-square
                        ${contain ? "object-contain" : "object-cover"}
                        ${avatar ? "rounded-full" : "rounded-lg"}
                        transition-all duration-200
                      `}
                      onClick={() => handleOpenViewer(index)}
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center space-x-1 opacity-0 group-hover:opacity-100">
                      <button
                        className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenViewer(index);
                        }}
                      >
                        <RiImageLine size={12} className="text-gray-700" />
                      </button>
                      <button
                        className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow hover:bg-red-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteImage(index);
                        }}
                      >
                        <RiCloseLine size={12} className="text-white" />
                      </button>
                    </div>

                    {currentImages.length > 1 && (
                      <>
                        {index > 0 && (
                          <button
                            className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMoveImage(index, -1);
                            }}
                          >
                            <RiArrowLeftLine
                              size={10}
                              className="text-gray-600"
                            />
                          </button>
                        )}
                        {index < currentImages.length - 1 && (
                          <button
                            className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMoveImage(index, 1);
                            }}
                          >
                            <RiArrowRightLine
                              size={10}
                              className="text-gray-600"
                            />
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentImages.length < maxImage && (
            <div
              className={`
                border border-dashed border-gray-300 rounded-lg cursor-pointer
                aspect-square w-24
                flex flex-col items-center justify-center transition-all duration-200
                hover:border-blue-500 hover:bg-blue-50
              `}
              onClick={handleChooseImage}
            >
              {uploading ? (
                <div className="flex flex-col items-center">
                  <Spinner />
                  <span className="text-xs text-gray-500 mt-1">
                    Đang tải...
                  </span>
                </div>
              ) : (
                <>
                  <RiImageAddLine size={16} className="text-gray-400 mb-1" />
                  <span className="text-xs text-gray-500 text-center">
                    Thêm ảnh
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {multi && currentImages.length > 0 && (
        <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
          <span>Đã chọn {currentImages.length} ảnh</span>
          <span>
            {currentImages.length}/{maxImage}
          </span>
        </div>
      )}

      {multi && Array.isArray(images) && images.length >= maxImage && (
        <p className="text-red-500 text-xs mt-1">
          Đã đạt giới hạn {maxImage} ảnh
        </p>
      )}

      {viewerVisible && currentImages.length > 0 && (
        <div className="fixed inset-0  bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl max-h-full">
            <img
              src={currentImages[activeIndex]}
              alt={`Viewing ${activeIndex + 1}`}
              className="max-w-full max-h-screen object-contain rounded"
            />

            {currentImages.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev > 0 ? prev - 1 : currentImages.length - 1
                    )
                  }
                >
                  <RiArrowLeftLine size={18} />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev < currentImages.length - 1 ? prev + 1 : 0
                    )
                  }
                >
                  <RiArrowRightLine size={18} />
                </button>
              </>
            )}

            <button
              className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
              onClick={handleCloseViewer}
            >
              <RiCloseLine size={18} />
            </button>

            {currentImages.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                {activeIndex + 1} / {currentImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
