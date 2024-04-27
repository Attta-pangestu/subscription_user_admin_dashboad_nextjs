import { ProductData } from "@/data/productsdata";
import { UserInfo } from "@/data/userInfoData";

export const transformData = (dataArray: UserInfo[] | ProductData[], type: 'user' | 'product' ): Array<Array<string>> => {
    switch (type) {
        case 'user':
            return (dataArray as UserInfo[]).map((item: UserInfo ) => [
                item.img, 
                item.username,
                item.email,
                item.created_at,
                item.role,
                item.status,
                item.id
            ]);
        case 'product':
            return (dataArray as ProductData[]).map((item: ProductData) => [
                item.img, 
                item.title,
                item.desc,
                item.price,
                item.created_at,
                item.stock.toString(),
                item.status,
                item.id,
            ]);
        default:
            return [];
    }
}
