/*

***************************
QuantumultX:

[rewrite_local]
^https:\/\/mobile-api\.adguard\.com\/api\/1\.0\/ios_validate_receipt$ url script-response-body adguard.js
[mitm]
hostname = mobile-api.adguard.com

***************************
Surge4 or Loon: 

[Script]
http-response ^https:\/\/mobile-api\.adguard\.com\/api\/1\.0\/ios_validate_receipt$ requires-body=1,max-size=-1,script-path=adguard.js

[MITM]
hostname = mobile-api.adguard.com

**************************/
let obj = JSON.parse($response.body);
obj={"products":[{"product_id":"com.adguard.lifetimePurchase","premium_status":"ACTIVE"}]};
$done({body: JSON.stringify(obj)});
