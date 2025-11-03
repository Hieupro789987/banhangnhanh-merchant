import { Img } from "@/components/shared/common/img";
import { EmptyBoxIcon, EmptyCartIcon, SearchIconLarge } from "./vectors";
import EmptyImg from "@/static/empty.png";
export function EmptySearchResult({
  title = "Không có nội dụng bạn tìm kiếm",
}) {
  return (
    <div className="flex-1 p-6 space-y-4 flex flex-col items-center justify-center">
      <SearchIconLarge />
      <div className="text-inactive text-center text-2xs">{title}</div>
    </div>
  );
}

export function EmptyCategory() {
  return (
    <div className="h-full flex-1 p-6 space-y-4 flex flex-col items-center justify-center">
      <EmptyBoxIcon />
      <div className="text-inactive text-center text-2xs">
        Không có sản phẩm trong danh mục này
      </div>
    </div>
  );
}

export function EmptyOrder() {
  return (
    <div className="h-full flex-1 p-6 space-y-4 flex flex-col items-center justify-center">
      <EmptyBoxIcon />
      <div className="text-inactive text-center text-2xs">
        Hiện tại bạn chưa có đơn hàng nào
      </div>
    </div>
  );
}

export function EmptyCart() {
  return (
    <div className="h-full flex-1 p-6 space-y-4 flex flex-col items-center justify-center">
      <EmptyCartIcon />
      <div className="text-inactive text-center text-2xs">
        Không có sản phẩm trong giỏ hàng
      </div>
    </div>
  );
}

export function EmptyList({ content = "" }) {
  return (
    <div>
      <Img src={EmptyImg} alt="empty" />
      {content && (
        <div className="text-center text-subtitle text-sm">{content}</div>
      )}
    </div>
  );
}
