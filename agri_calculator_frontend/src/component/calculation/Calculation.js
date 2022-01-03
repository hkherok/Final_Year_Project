import React from 'react'
import { Calc, data, Seed } from './Data'
import { useReducer, useState } from 'react';
import "./Calculation.css"
import {addResult, dataProcess} from "./CRUD"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

const allInfo = data;
let finalProcess = new Array(12);
var seed = new Seed();
export default function Calculation() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        let data = new Calc();
        data = Calculator(formData['district'], parseFloat(formData['land']), formData['crop']);
        data.user_name = localStorage.getItem('username');
        data.user = localStorage.getItem('userid');
        data.user_land = formData['land'];
        addResult(data);
        
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 200000);
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }


    return (
        <>
            <div className='calc_form' id='calculation'>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <div className='main_form'>
                            <div className='district'>
                                <label>আপনার জেলা নির্বাচন করুন</label>
                                <select name="district" onChange={handleChange}>
                                    <option selected value="coconut">এখানে ক্লিক করুন</option>
                                    <option value="cumilla">কুমিল্লা</option>
                                    <option value="feni">ফেনী</option>
                                    <option value="brahmanbaria">ব্রাহ্মণবাড়িয়া</option>
                                    <option value="rangamati">
                                        রাঙ্গামাটি
                                    </option>
                                    <option value="noakhali">
                                        নোয়াখালী</option>
                                    <option value="chandpur">
                                        চাঁদপুর
                                    </option>
                                    <option value="lakshmipur">
                                        লক্ষ্মীপুর
                                    </option>
                                    <option value="chittagong">
                                        চট্টগ্রাম
                                    </option>
                                    <option value="cox's_bazar">
                                        কক্সবাজার
                                    </option>
                                    <option value="khagrachhari">
                                        খাগড়াছড়ি
                                    </option>
                                    <option value="bandarban">
                                        বান্দরবান
                                    </option>
                                    <option value="sirajganj">
                                        সিরাজগঞ্জ
                                    </option>
                                    <option value="pabna">
                                        পাবনা
                                    </option>
                                    <option value="bogura">
                                        বগুড়া
                                    </option>
                                    <option value="rajshahi">
                                        রাজশাহী
                                    </option>
                                    <option value="natore">
                                        নাটোর
                                    </option>
                                    <option value="joypurhat">
                                        জয়পুরহাট
                                    </option>
                                    <option value="chapainawabganj">
                                        চাঁপাইনবাবগঞ্জ
                                    </option>
                                    <option value="naogaon">
                                        নওগাঁ
                                    </option>
                                    <option value="jessore">
                                        যশোর
                                    </option>
                                    <option value="satkhira">
                                        সাতক্ষীরা
                                    </option>
                                    <option value="meherpur">
                                        মেহেরপুর
                                    </option>
                                    <option value="narail">
                                        নড়াইল
                                    </option>
                                    <option value="chuadanga">
                                        চুয়াডাঙ্গা
                                    </option>
                                    <option value="kushtia">
                                        কুষ্টিয়া
                                    </option>
                                    <option value="magura">
                                        মাগুরা
                                    </option>
                                    <option value="khulna">
                                        খুলনা
                                    </option>
                                    <option value="bagerhat">
                                        বাগেরহাট
                                    </option>
                                    <option value="jhenaidah">
                                        ঝিনাইদহ
                                    </option>
                                    <option value="jhalakathi">
                                        ঝালকাঠি
                                    </option>
                                    <option value="patuakhali">
                                        পটুয়াখালী
                                    </option>
                                    <option value="pirojpur">
                                        পিরোজপুর
                                    </option>
                                    <option value="barisal">
                                        বরিশাল
                                    </option>
                                    <option value="bhola">
                                        ভোলা
                                    </option>
                                    <option value="barguna">
                                        বরগুনা
                                    </option>
                                    <option value="sylhet">
                                        সিলেট
                                    </option>
                                    <option value="moulvibazar">
                                        মৌলভীবাজার
                                    </option>
                                    <option value="habiganj">
                                        হবিগঞ্জ
                                    </option>
                                    <option value="sunamganj">
                                        সুনামগঞ্জ
                                    </option>
                                    <option value="narsingdi">
                                        নরসিংদী
                                    </option>
                                    <option value="gazipur">
                                        গাজীপুর
                                    </option>
                                    <option value="shariatpur">
                                        শরীয়তপুর
                                    </option>
                                    <option value="narayanganj">
                                        নারায়ণগঞ্জ
                                    </option>
                                    <option value="tangail">
                                        টাঙ্গাইল
                                    </option>
                                    <option value="kishoreganj">
                                        কিশোরগঞ্জ
                                    </option>
                                    <option value="manikganj">
                                        মানিকগঞ্জ
                                    </option>
                                    <option value="dhaka">
                                        ঢাকা
                                    </option>
                                    <option value="munshiganj">
                                        মুন্সিগঞ্জ
                                    </option>
                                    <option value="rajbari">
                                        রাজবাড়ী
                                    </option>
                                    <option value="madaripur">
                                        মাদারীপুর
                                    </option>
                                    <option value="gopalganj">
                                        গোপালগঞ্জ
                                    </option>
                                    <option value="faridpur">
                                        ফরিদপুর
                                    </option>
                                    <option value="panchagarh">
                                        পঞ্চগড়
                                    </option>
                                    <option value="dinajpur">
                                        দিনাজপুর
                                    </option>
                                    <option value="lalmonirhat">
                                        লালমনিরহাট
                                    </option>
                                    <option value="nilphamari">
                                        নীলফামারী
                                    </option>
                                    <option value="gaibandha">
                                        গাইবান্ধা
                                    </option>
                                    <option value="thakurgaon">
                                        ঠাকুরগাঁও
                                    </option>
                                    <option value="rangpur">
                                        রংপুর
                                    </option>
                                    <option value="kurigram">
                                        কুড়িগ্রাম
                                    </option>
                                    <option value="sherpur">
                                        শেরপুর
                                    </option>
                                    <option value="mymensingh">
                                        ময়মনসিংহ
                                    </option>
                                    <option value="jamalpur">
                                        জামালপুর
                                    </option>
                                    <option value="netrokona">
                                        নেত্রকোণা
                                    </option>
                                </select>
                            </div>
                            <div className='district'>
                                <label>ফসল নির্বাচন করুন</label>
                                <select name="crop" onChange={handleChange}>
                                    <option selected value="coconut">এখানে ক্লিক করুন</option>
                                    <option value="ব্রি ধান২৬">ব্রি ধান২৬</option>
                                    <option value="ব্রি ধান৪২">ব্রি ধান৪২</option>
                                    <option value="ব্রি ধান৪৩">ব্রি ধান৪৩</option>
                                    <option value="ব্রি ধান৪৮">ব্রি ধান৪৮</option>
                                    <option value="ব্রি ধান৫৫">ব্রি ধান৫৫</option>
                                    <option value="ব্রি ধান৬৩">ব্রি ধান৬৩</option>
                                    <option value="ব্রি ধান৬৫">ব্রি ধান৬৫</option>
                                    <option value="ব্রি ধান৮২">ব্রি ধান৮২</option>
                                    <option value="ব্রি ধান৮৩">ব্রি ধান৮৩</option>
                                    <option value="ব্রি ধান৮৫">ব্রি ধান৮৫</option>
                                    <option value="রোপা আউশ">রোপা আউশ</option>
                                </select>
                            </div>
                            <div className='quantity_land'>
                                <label>জমির পরিমাণ</label>
                                <input type="text" name="land" onChange={handleChange} placeholder='বিঘা' />
                            </div>
                        </div>
                        <button type='submit'>Calculate</button>
                    </form>
                </div>
                {submitting &&
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-6'>
                            <div className='result '>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>হিসাবের নাম</th>
                                            <th>হিসাবকৃত ফলাফল</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(finalProcess).map(([name, value]) => (
                                            // <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                                            <tr className="table-row">
                                                <td>{value[0]}</td>
                                                <td style={{ textTransform: 'capitalize' }}>{value[1]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div style={{ color: 'white' }} className='mt-5'>
                                    <p>
                                        চাষের সময় ১/৩ ভাগ ইউরিয়া ও অন্যান্য সকল সার শেষ চাষের সময় প্রয়োগ করতে হবে, ২য় কিস্তি ইউরিয়া (১/৩ ভাগ) ৪-৫ টি কুশি দেখা দিলে (সাধারণ রোপনের ১৫-১৮ দিন পর) এবং ৩য় কিস্তি (১/৩ ভাগ) ইউরিয়া কাইচথোড় আসার ৫-৭ দিন পূর্বে প্রয়োগ করতে হবে । অন্যদিকে বোনা আউশের ক্ষেত্রে টিএসপি, এমওপি, জিপসাম ও জিংক শেষ চাষের সময় প্র্যোগ করতে হবে। ইউরিয়া সমান ২ কিস্তিতে প্রয়োগ করলে গাছের বাড়-বাড়তি ভাল হয় ও ফলন বৃদ্ধি পায় । ১ম কিস্তি শেষ চাষের সময় ও ২য় কিস্তি ধান বপনের ৩০-৪০ দিন পর প্রয়োগ করতে হয় ।
                                    </p>
                                    <p>
                                        <b style={{ fontWeight: '600', fontSize: '20px' }}>আগাছা দমনঃ</b> সাধারণত হাত দিয়ে, নিড়ানী যন্ত্রের সাহায্যে অথবা আগাছানাশক ব্যবহারের মাধ্যমে ৩০-৩৫ দিন পর্যন্ত আগাছামুক্ত রাখতে হবে । রোপা আউশ ধানের জন্য প্রি ইমারজেন্স আগাছানাশক হিসাবে বেনসালফিউরান মিথাইল+এসিটাক্লোর, মেফেনেসেট+বেন্সালফিউরান মিথাইল ইত্যাদি গ্রুপের আগাছানাশক রোপ্নের ৩ দিনের মধ্যে প্রয়োগ করতে হবে।
                                    </p>
                                    <p>
                                        <b style={{ fontWeight: '600', fontSize: '20px' }}>সেচ ব্যবস্থপনাঃ</b> ধানের চারা লাগানোর সময়বা বীজ বপনের সময় বৃষ্টিপাত না হলে সময়মত চারা রোপন এর জন্য সম্পূরক সেচ দিতে হবে। সরাসরি বীজ বপ্নের ক্ষেত্রে জমিতে জো অবস্থা বিরাজমান না থাকলে অংকুরিত বীজ জমিতে কাদা করে লাইনে বপন করতে হবে ।
                                    </p>
                                    <p>
                                        <b style={{ fontWeight: '600', fontSize: '20px' }}>রোগ বালাই ব্যবস্থপনাঃ</b> আউস মওসুমে সাধারণত খোলপোড়া রোগ, ব্যাক্টেরিয়াজনিত পাতা পোড়া রোগ, টুমগ্রো এবং বাকানি রোগের প্রকোপ দেখা দেয়। খোলপোড়া রোগের জন্য জমিতে পানি বের করে দিয়ে বিঘা প্রতি ৫ কেজি পটাস সার প্রয়োগ করতে হবে। টুংরা দেখা দিলে আক্রান্ত গাছ উঠিয়ে মাটিতে  পুতে ফেলতে হবে। বাকানি প্রবন এলাকায় রোগ প্রতিরোধে অটিস্টিন ছত্রাকনাশক প্রতি লিটারে ২-৩ গ্রাম ১ কেজি বীজে মিশ্রিত করে শোধন করা যেতে পারে।
                                    </p>
                                    <p>
                                        <b style={{ fontWeight: '600', fontSize: '20px' }}>পোকামাকড় ব্যবস্থপনাঃ</b> আউশ মুখ্য পোকা গুলো হল – মাজরা পোকা, পামারি পোকা, থ্রিপস, গান্ধি পোকা, সবুজ পাতা ফড়িং রবং বাদামি গাছফড়িং। পোকা দমনে আলোকফাদ এবং পার্চিং ব্যভার করতে হবে। পোকা দমনের জন্য কার্বোসালফান গ্রুপের কীটনাশক মারসাল-২০ ইসি ব্যবহার করা যেতে পারে।
                                    </p>
                                    <p>
                                        <b style={{ fontWeight: '600', fontSize: '20px' }}>ফসল কাটা ও মাড়াইঃ</b> শীষের অগ্রভাগের ৮০ শতাংস ধানের চাউল শক্ত ও সচ্ছ হলে ধান কেটে ফেলতে হবে। তারাতাড়ি মাড়াইয়ের জন্য ব্রি উদ্ভাবিত মাড়াই যন্ত্র ব্যাবহার করা যেতে পারে। বাদলা দিনে কোন উপায় না থাকলে ধান মাড়াই করে সাধ্যমত ঝেড়ে বৃষ্টিমুক্ত স্থানে ছড়িয়ে দিয়ে শুকানোর ব্যবস্থা করতে হবে।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                }
            </div>
        </>
    )
}

function Calculator(district, land, crop) {
    console.log(land)
    let flag = new Boolean(false);

    for (let i = 0; i < allInfo.length; i++) {
        //console.log(allInfo[i]);
        for (let j = 0; j < allInfo[i].area.length; j++) {
            //console.log(allInfo[i].area[j]);

            if (district == allInfo[i].area[j]) {
                flag = true;
                seed = allInfo[i];
                seed.urea = allInfo[i].urea * land;
                seed.tsp = allInfo[i].tsp * land;
                seed.mop = allInfo[i].mop * land;
                seed.gipsam = allInfo[i].gipsam * land;
                seed.zinc = allInfo[i].zinc * land;
                console.log(allInfo[i]);
                break;
            }
        }
        if (flag == true) {
            break;
        }
    }
    console.log(seed);
    seed.area = district;

    finalProcess = dataProcess(seed, land, crop);
    
    return seed;
}