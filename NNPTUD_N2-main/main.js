// Câu 1: Khai báo constructor function 
let Product = function (id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
    
    this.getInfor = function () {
        return `${this.name} - ${this.category} - ${this.isAvailable ? "Đang bán" : "Ngừng bán"}`;
    }
}

// Câu 2: Khởi tạo mảng và push sản phẩm vào 
let products = [];
products.push(new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphone", true));
products.push(new Product(2, "MacBook M3", 45000000, 5, "Laptop", true));
products.push(new Product(3, "Chuột Magic", 2500000, 0, "Accessories", false));
products.push(new Product(4, "Bàn phím cơ", 3500000, 8, "Accessories", true));
products.push(new Product(5, "Tai nghe AirPods", 4000000, 12, "Accessories", true));
products.push(new Product(6, "Samsung S24", 31000000, 15, "Smartphone", true));

// --- BẮT ĐẦU IN RA CONSOLE ---
console.log("%c--- KẾT QUẢ BÀI TẬP JAVASCRIPT ---", "color: red; font-weight: bold; font-size: 16px;");

// Câu 3: Dùng .map()
let resultCau3 = products.map(e => ({ name: e.name, price: e.price }));
console.log("--- Câu 3: Tên và giá sản phẩm ---");
console.table(resultCau3);

// Câu 4: Dùng .filter() 
let resultCau4 = products.filter(e => e.quantity > 0);
console.log("--- Câu 4: Sản phẩm còn hàng ---");
console.table(resultCau4);

// Câu 5: Dùng .some()
let resultCau5 = products.some(e => e.price > 30000000);
console.log("--- Câu 5: Có sản phẩm nào giá > 30tr? ---");
console.log(resultCau5);

// Câu 6: Dùng .every()
let accessories = products.filter(e => e.category === "Accessories");
let resultCau6 = accessories.every(e => e.isAvailable === true);
console.log("--- Câu 6: Tất cả Accessories có đang bán? ---");
console.log(resultCau6);

// Câu 7: Dùng .reduce()
let totalValue = products.reduce((sum, e) => sum + (e.price * e.quantity), 0);
console.log("--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalValue.toLocaleString() + " VNĐ");

// Câu 8: Duyệt mảng bằng for...of
console.log("--- Câu 8: In ra bằng for...of ---");
for (const p of products) {
    console.log(p.getInfor());
    // In ra HTML (nếu có các div id tương ứng)
    let out8 = document.getElementById("output8");
    if(out8) {
        let pTag = document.createElement("p");
        pTag.textContent = p.getInfor();
        out8.appendChild(pTag);
    }
}

// Câu 9: In thuộc tính bằng for...in
console.log("--- Câu 9: In thuộc tính sp đầu tiên bằng for...in ---");
let firstP = products[0];
let out9 = document.getElementById("output9");
for (const key in firstP) {
    if (typeof firstP[key] !== 'function') { 
        console.log(`Thuộc tính: ${key} - Giá trị: ${firstP[key]}`);
        if(out9) out9.innerHTML += `<b>${key}:</b> ${firstP[key]} <br>`;
    }
}

// Câu 10: Lấy danh sách SP đang bán và còn hàng
let resultCau10 = products.filter(e => e.isAvailable === true && e.quantity > 0);
console.log("--- Câu 10: Tên các sp đang bán và còn hàng ---");
console.log(resultCau10);

let out10 = document.getElementById("output10");
if(out10) out10.textContent = JSON.stringify(resultCau10, null, 4);