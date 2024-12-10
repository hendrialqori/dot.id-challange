# DOT Indonesia Front-end Challange

ini adalah **take home test** dari PT Digdaya Olah Teknologi Indonesia untuk untuk Front-end Developer.

## Cerita
Aplikasi ini berfungsi untuk mengecek / tracking harga sebuat jasa pengiriman barang antar kota/provinsi dengan expedisi yang sudah terkenal di seluruh indonesia (JNE, TIKI, POS),
menggunakan API dari **raja ongkir** memudahkan proses development dengan dokumentasi yang lengkap.

## Bagaimana cara install aplikasi ini di lokal komputer ?
1. Buka link github repositori ini [https://github.com/hendrialqori/dot.id-challange](https://github.com/hendrialqori/dot.id-challange)
2. Lakukan cloning seperti langkah dibawah ini :
```.bash
git clone https://github.com/hendrialqori/dot.id-challange.git
```
atau menggunakan ssh :
```.bash
 git clone git@github.com:hendrialqori/dot.id-challange.git
```

3. Jika proses cloning berhasil masuk ke directory dot.id-challange, dengan cara :
```.bash
cd dot.id-challange 
```
4. Step selanjut nya install semua dependency yang terdapat pada file package.json
```.bash
npm install
```
5. Jika proses sudah selesai, jalakan aplikasi dengan perintah :
```.bash
npm run dev
```

## Environment variable
```.env
NEXT_PUBLIC_API_KEY="acf834ba07d71b794bed2e03f5ab94bb"
NEXT_PUBLIC_API_URL="https://api.rajaongkir.com/starter"
```

Happy coding :)
