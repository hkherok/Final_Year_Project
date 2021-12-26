import React from 'react'
import { data, Seed } from '../../calculation'

import { useReducer, useState } from 'react';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

let seed = new Seed();
let result = new Array();
let tsp, district, land;
export default function Calculation() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 20000);
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>আপনার জেলা পছন্দ করুনঃ</label>
                    <select name="district" onChange={handleChange}>
                        <option selected value="coconut">Select Option</option>
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
                        <option value="Lakshmipur">
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
                    <label>জমির পরিমাণঃ</label>
                    <input type="text" name="land" onChange={handleChange} />
                    <button type='submit'>Submit</button>
                </form>
                <h1>How About Them Apples</h1>
                {submitting &&
                    <div>
                        You are submitting the following:
                        <ul>
                            {Object.entries(formData).map(([name, value]) => (
                                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                            ))}
                        </ul>
                        <ul>
                            {Calculator(formData['district'], formData['land'])}
                            {Object.entries(seed).map(([name, value]) => (
                                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

function Calculator(district, land) {
    console.log(district)
    const allInfo = data;
    let flag = new Boolean(false);
    for (let i = 0; i < allInfo.length; i++) {
        //console.log(allInfo[i]);
        for (let j = 0; j < allInfo[i].area.length; j++) {
            //console.log(allInfo[i].area[j]);

            if (district == allInfo[i].area[j]) {
                flag = true;
                seed = allInfo[i];
                console.log("Is Execute!!");
                break;
            }
        }
        if (flag == true) {
            break;
        }
    }
    console.log(seed);
    seed.urea = parseFloat(seed.urea) * parseInt(land);
    seed.tsp = parseFloat(seed.tsp) * parseInt(land);
    seed.mop = parseFloat(seed.mop) * parseInt(land);
    seed.gipsam = parseFloat(seed.mop) * parseInt(land);
    seed.zinc = parseFloat(seed.zinc) * parseInt(land);
}
