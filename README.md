# رابط کاربری فروشگاه ساعت کوک توسط محمدرضا گوهری

این پروژه یک فروشگاه آنلاین به زبان TypeScript و با فریمورک Next.js پیاده سازی شده است.

## ابزارها و تکنولوژی‌ها

- **Next.js**
- **TypeScript**
- **ESLint** و **Prettier** برای بهینه‌سازی کد
- **Storybook** برای داکیومنت‌کردن کامپوننت‌ها
- **Husky** برای اجرای تست‌ها قبل از ارسال به گیت

 ### فرایند lint کردن خودکار هنگام کامیت با husky انجام می شود ولی اگر به صورت دستی نیاز به این فرایند دارید از دستور زیر استفاده نمایید: 

``` bash
pnpm run lint
```
یا
``` bash
npm run lint
```
 یا
```
yarn run lint
```

## Components Documentation 
از طریق پورت 6006 داکیومنت ها برایتان نمایش داده می شود.

``` bash
pnpm run storybook
```
یا
``` bash
npm run storybook
```
 یا
```
yarn run storybook
```



## نصب و اجرا

برای نصب پروژه، ابتدا از طریق Git آن را clone کنید. سپس دستور زیر را اجرا کنید:

``` bash
pnpm install
```
یا
``` bash
npm install
```
 یا
```
yarn install
```
####  دقت کنید با استفاده از pnpm سرعت نصب بالاتری برخوردارید*

سپس برای اجرای پروژه، از دستور زیر استفاده کنید:
``` bash
pnpm run dev
```
```
npm run dev
```
```
yarn dev
```
سپس برای اجرای خروجی نهایی، از دستور زیر استفاده کنید:
``` bash
pnpm run build
```
```
npm run build
```
```
yarn build
```


## راهنمای مشارکت
<div dir="rtl">
ما از مشارکت‌های شما بسیار خوشحال خواهیم شد. برای مشارکت، لطفا مراحل زیر را دنبال کنید:


1. Fork کنید این مخزن
2. یک برنچ جدید برای تغییرات خود بسازید (git checkout -b feature/جدید)
3. کدها را تغییر دهید
4. تغییرات خود را commit کنید (git commit -am 'افزودن امکان ...')
5. برنچ خود را push کنید (git push origin feature/جدید)
6. یک pull request ایجاد کنید

ما تازه‌ترین تغییرات شما را مرور و ادغام خواهیم کرد.
</div>


## لایسنس

این پروژه تحت مجوز MIT منتشر شده است. برای اطلاعات بیشتر، [اینجا](LICENSE) را مشاهده کنید.
