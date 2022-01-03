import React from 'react';

let finalProcess = new Array(8);

export function dataProcess(seed){
    for (let i = 0; i < finalProcess.length; i++) {
        finalProcess[i] = new Array('', '');
    }


    finalProcess[0][0] = "রিপোর্ট নাম্বার"; finalProcess[0][1] = seed['id'];
    finalProcess[1][0] = "রিপোর্ট তৈরি করেছিলেন"; finalProcess[1][1] = seed['created'].substr(0, 10);
    finalProcess[2][0] = "জমির পরিমাণ"; finalProcess[2][1] = seed['user_land'];
    finalProcess[3][0] = "ইউরিয়া"; finalProcess[3][1] = seed['urea'];
    finalProcess[4][0] = "টিএসপি"; finalProcess[4][1] = seed['tsp'];
    finalProcess[5][0] = "এমওপি"; finalProcess[5][1] = seed['mop'];
    finalProcess[6][0] = "জিপসাম"; finalProcess[6][1] = seed['gipsam'];
    finalProcess[7][0] = "দস্তা (জিংক সালফেট)"; finalProcess[7][1] = seed['zinc'];

    return finalProcess;
}