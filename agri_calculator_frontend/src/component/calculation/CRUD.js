import { message } from "antd";
import axios from "axios";
import { coreAxios } from "../../utils/axios"

export function addResult(data) {
    const result = data;
    
    coreAxios
    .post('http://127.0.0.1:8000/api/calculation/', result)
    .then(res =>{
        message.success("Added Successfully");
    })
    .catch(err =>{
        console.log(err);
    })
}

let finalProcess = new Array(12);

export function dataProcess(seed, land, crop){
    for (let i = 0; i < finalProcess.length; i++) {
        finalProcess[i] = new Array('', '');
    }

    let month = ['', 'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর']

    finalProcess[0][0] = "স্থান"; finalProcess[0][1] = seed['area'];
    finalProcess[1][0] = "ধানের জাত"; finalProcess[1][1] = crop.toString();
    finalProcess[2][0] = "জমির পরিমাণ"; finalProcess[2][1] = parseFloat(land).toString();
    finalProcess[3][0] = "বীজতলায় বীজ বপন"; finalProcess[3][1] = seed['Seed_sowing_first_date'].toString() + ', ' + month[seed['Seed_sowing_first_month']] + " - " + seed['Seed_sowing_last_date'].toString() + ', ' + month[seed['Seed_sowing_last_month']];
    finalProcess[4][0] = "চারা রোপণ"; finalProcess[4][1] = seed['first_date'].toString() + ', ' + month[seed['first_month']] + " - " + seed['last_date'].toString() + ', ' + month[seed['last_month']];
    finalProcess[5][0] = "রোপণ দূরত্ব"; finalProcess[5][1] = seed['first_length'].toString() + ' ইঞ্চি X ' + seed['last_length'] + ' ইঞ্চি';
    finalProcess[6][0] = "চারার সংখ্যা"; finalProcess[6][1] = 'প্রতি গোছায় ' + seed['seed_count'] + 'টি';
    finalProcess[7][0] = "ইউরিয়া"; finalProcess[7][1] = seed['urea'];
    finalProcess[8][0] = "টিএসপি"; finalProcess[8][1] = seed['tsp'];
    finalProcess[9][0] = "এমওপি"; finalProcess[9][1] = seed['mop'];
    finalProcess[10][0] = "জিপসাম"; finalProcess[10][1] = seed['gipsam'];
    finalProcess[11][0] = "দস্তা (জিংক সালফেট)"; finalProcess[11][1] = seed['zinc'];

    return finalProcess;
}