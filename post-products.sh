#!/bin/bash

API_URL="https://microservices.appf4.io.vn/adamstore/v1/admin/products"
TOKEN="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJBZG1pbiIsImV4cCI6MTc1Mjg3MDM3OSwiaWF0IjoxNzUyNzM4Mzc5LCJqdGkiOiIxMmNiOGM4NS01MjE1LTRlZjktOTdiYi1iMjUxMzIyNDg0ZDMifQ.GqA5eLqmhWSWl-X6J1_ZnNxl_iCUDnXLopCd-oMsoovQzPJUjrv03ktvBvoNls_Gdsp2km7XDs3DnzBsdAKaTA"  # 🔐 <-- Thay bằng token thực tế

for i in {1..20}
do
  PRODUCT_NAME="Áo thun nam thể thao - Mẫu $i"
  DESCRIPTION="Mẫu áo số $i dành cho nam, chất liệu cotton co giãn thoáng mát."
  
  # Quay vòng imageId từ 6–9
  IMAGE_ID_1=$(( (i % 4) + 6 ))                # 6 7 8 9
  IMAGE_ID_2=$(( ((i + 1) % 4) + 6 ))          # 7 8 9 6 (khác imageId 1)

  # Quay vòng color và size
  COLOR_ID_1=$(( (i % 6) + 1 ))                # 1-6
  COLOR_ID_2=$(( ((i + 1) % 6) + 1 ))          # khác colorId 1

  SIZE_ID_1=$(( (i % 4) + 1 ))                 # 1-4
  SIZE_ID_2=$(( ((i + 1) % 4) + 1 ))

  # Giá & tồn kho
  PRICE=$((199000 + (i % 5) * 1000))           # 199k ~ 203k
  QUANTITY_1=$((50 + (i % 5) * 10))
  QUANTITY_2=$((30 + (i % 5) * 5))

  JSON=$(cat <<EOF
{
  "name": "$PRODUCT_NAME",
  "description": "$DESCRIPTION",
  "categoryId": 1,
  "variants": [
    {
      "colorId": $COLOR_ID_1,
      "sizeId": $SIZE_ID_1,
      "imageId": $IMAGE_ID_1,
      "price": $PRICE,
      "quantity": $QUANTITY_1
    },
    {
      "colorId": $COLOR_ID_2,
      "sizeId": $SIZE_ID_2,
      "imageId": $IMAGE_ID_2,
      "price": $PRICE,
      "quantity": $QUANTITY_2
    }
  ]
}
EOF
)

  echo "📦 Đang gửi sản phẩm $i: $PRODUCT_NAME"

  curl -s -X POST "$API_URL" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "$JSON"

  echo -e "\n✅ Đã gửi sản phẩm $i"
  sleep 0.5
done
