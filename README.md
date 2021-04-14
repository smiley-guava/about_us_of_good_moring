# about_us_of_good_moring
先分別將html跟css的語法改成pug跟sass的語法，將檔案(aboutus)存到prepocesser資料夾後，利用parcel ./aboutus/index.pug指令，利用parcel打包。

過程中，一起打包的js檔有被把包到，卻無法運作(無法顯現動畫)，error顯示"script.js:121 Uncaught ReferenceError: PersonalIntro is not defined at HTMLImageElement.onceHandler (script.js:121) onceHandler @ script.js:121"，所以我們將intro.js的code貼到script.js中來解決。但或許是因為Shake.js有使用網路上的semantic ui，所以parcel打包之後路徑可能因此有誤，連結不到而產生錯誤，使得Shake.js的動畫依然無法顯現。
