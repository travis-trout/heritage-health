var patientGroup, familyNumber, patientincome, scaleLevels, payments, extraFamilyMembers;
var incomeScales, g1Scales, g2Scales, g3Scales, g4Scales, g5Scales, g6Scales, g7Scales, g8Scales

g1Scales = [12880,17130.4,19320,22540,25760]; //Updated to 2021
g2Scales = [17420,23168.6,26130,30485,34840]; //Updated to 2021
g3Scales = [21960,29206.8,32940,38430,43920]; //Updated to 2021
g4Scales = [26500,35245,39750,46375,53000]; //Updated to 2021
g5Scales = [31040,41283.2,46560,54320,62080]; //Updated to 2021
g6Scales = [35580,47321.4,53370,62265,71160]; //Updated to 2021
g7Scales = [40120,53359.6,60180,70210,80240]; //Updated to 2021
g8Scales = [44660,59397.8,66990,78155,89320]; //Updated to 2021
incomeScales = [g1Scales,g2Scales,g3Scales,g4Scales,g5Scales,g6Scales,g7Scales,g8Scales];

scaleLevels = [0,1,2,3,4,5];
payments = [25,35,45,55,65,80];

function findPayScaleLargeFamilies(familyNumber, annualIncome){
    //use to determine payscale if family size is greater than 8 members
        var extraFamilyMembers = familyNumber - 8
        var largeFamilyIncome = [((incomeScales[7])[0])+(4540*extraFamilyMembers),
                             ((incomeScales[7])[1])+(6038.2*extraFamilyMembers),
                             ((incomeScales[7])[2])+(6810*extraFamilyMembers),
                             ((incomeScales[7])[3])+(7945*extraFamilyMembers),
                             ((incomeScales[7])[4])+(9080*extraFamilyMembers)
                             ];
	if (familyNumber < 9){
		return findPayScaleLargeFamilies(familyNumber, annualIncome)
		}
    else{
        if (annualIncome <= largeFamilyIncome[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= largeFamilyIncome[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= largeFamilyIncome[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= largeFamilyIncome[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= largeFamilyIncome[4]){
			return scaleLevels[4]
		}
		if (annualIncome >  largeFamilyIncome[4]){
			return scaleLevels[5]
		}
    }
}

function findPayScale(familyNumber,annualIncome){
// if 1 family member
	if (familyNumber === 1){
		if (annualIncome <= (incomeScales[0])[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= (incomeScales[0])[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= (incomeScales[0])[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= (incomeScales[0])[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= (incomeScales[0])[4]){
			return scaleLevels[4]
		}
		if (annualIncome > (incomeScales[0])[4]){
			return scaleLevels[5]
		};
	};
//if 2 family members
	if (familyNumber === 2){
		if (annualIncome <= (incomeScales[1])[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= (incomeScales[1])[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= (incomeScales[1])[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= (incomeScales[1])[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= (incomeScales[1])[4]){
			return scaleLevels[4]
		}
		if (annualIncome > (incomeScales[1])[4]){
			return scaleLevels[5]
		};
	};
//if 3 family members
	if (familyNumber === 3){
		if (annualIncome <= (incomeScales[2])[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= (incomeScales[2])[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= (incomeScales[2])[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= (incomeScales[2])[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= (incomeScales[2])[4]){
			return scaleLevels[4]
		}
		if (annualIncome > (incomeScales[2])[4]){
			return scaleLevels[5]
		};
	};
//if 4 family members
	if (familyNumber === 4){
		if (annualIncome <= (incomeScales[3])[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= (incomeScales[3])[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= (incomeScales[3])[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= (incomeScales[3])[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= (incomeScales[3])[4]){
			return scaleLevels[4]
		}
		if (annualIncome > (incomeScales[3])[4]){
			return scaleLevels[5]
		};
	};
//if 5 family members
	if (familyNumber === 5){
		if (annualIncome <= (incomeScales[4])[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= (incomeScales[4])[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= (incomeScales[4])[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= (incomeScales[4])[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= (incomeScales[4])[4]){
			return scaleLevels[4]
		}
		if (annualIncome > (incomeScales[4])[4]){
			return scaleLevels[5]
		};
	};

//if 6 family members
	if (familyNumber === 6){
		if (annualIncome <= (incomeScales[5])[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= (incomeScales[5])[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= (incomeScales[5])[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= (incomeScales[5])[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= (incomeScales[5])[4]){
			return scaleLevels[4]
		}
		if (annualIncome > (incomeScales[5])[4]){
			return scaleLevels[5]
		};
	};
//if 7 family members
	if (familyNumber === 7){
		if (annualIncome <= (incomeScales[6])[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= (incomeScales[6])[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= (incomeScales[6])[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= (incomeScales[6])[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= (incomeScales[6])[4]){
			return scaleLevels[4]
		}
		if (annualIncome > (incomeScales[6])[4]){
			return scaleLevels[5]
		};
	};
//if 8 family members
	if (familyNumber === 8){
		if (annualIncome <= (incomeScales[7])[0]){
			return scaleLevels[0]
		}
		if (annualIncome <= (incomeScales[7])[1]){
			return scaleLevels[1]
		}
		if (annualIncome <= (incomeScales[7])[2]){
			return scaleLevels[2]
		}
		if (annualIncome <= (incomeScales[7])[3]){
			return scaleLevels[3]
		}
		if (annualIncome <= (incomeScales[7])[4]){
			return scaleLevels[4]
		}
		if (annualIncome > (incomeScales[7])[4]){
			return scaleLevels[5]
		};
	};
//if More than 8 family members
    if(familyNumber > 8){
        return  findPayScaleLargeFamilies(familyNumber,annualIncome)
       }
	};


//patientGroup = findPayScale(familyNumber,annualIncome);

//console.log('Patient is in group ' +group+  ' and has a fee of $' + payments[patientGroup])
//console.log(annualIncome)
//console.log(familyNumber)
//console.log(patientGroup)


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function changeNum(str) {
    while (str.search(",") >= 0) {
        str = (str + "").replace(',', '');
    }
    return Number(str);
};

function findIncome(income, payDays){
	return income * payDays
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

//add event listener
var calBtn = document.getElementById('calcBtn-0')


if (!calBtn.addEventListener){

	calBtn.attachEvent('onclick',function(){
    
    var show =function(){ document.getElementById('resultBox').style.display = 'block'};
    var hide =function(){ document.getElementById('resultBox').style.display = 'none'};
    //find the group the patient is in
    var income = changeNum(document.getElementById('income-0').value);
    var pDays = changeNum(document.getElementById('payDays-0').value);
    var fMems = changeNum(document.getElementById('famMems-0').value);
    var annIncome = findIncome(income,pDays);
    var group = findPayScale(fMems,annIncome);
    
    if(income && fMems){
    
    /*console.log('income is ' + income)
    console.log('Pdays is ' + pDays)
    console.log('fmems is ' + fMems)
    console.log('annincome is ' + annIncome)
    console.log('Patient is in group ' +(group + 1)+  ' and has a fee of $' + payments[group])*/
    
    //update the entry fields

    show()   
    document.getElementById('annualIncome').innerHTML= '<b><font size = 5>Annual Income: $'+ numberWithCommas(annIncome) +'</font></b>'
    
    document.getElementById('monthlyIncome').innerHTML= '<b><font size = 5>Monthly Income: $'+ numberWithCommas((round((annIncome/12),2))) +'</font></b>'
    
    document.getElementById('slidingFeeGroup').innerHTML= '<b><font size = 5>Sliding Fee Group: '+ (group + 1) +'</font></b>'
    
    document.getElementById('patientPayment').innerHTML= '<b><font size = 5>Patient Pays: $'+ payments[group] +'</font></b>'
        
    }
    else {hide()}
    
    //dispay the group and fee for the patient
    
        });

}

else{
	calBtn.addEventListener('click',function(){
    
    var show =function(){ document.getElementById('resultBox').style.display = 'block'};
    var hide =function(){ document.getElementById('resultBox').style.display = 'none'};
    //find the group the patient is in
    var income = changeNum(document.getElementById('income-0').value);
    var pDays = changeNum(document.getElementById('payDays-0').value);
    var fMems = changeNum(document.getElementById('famMems-0').value);
    var annIncome = findIncome(income,pDays);
    var group = findPayScale(fMems,annIncome);
    
    if(income && fMems){
    
    /*console.log('income is ' + income)
    console.log('Pdays is ' + pDays)
    console.log('fmems is ' + fMems)
    console.log('annincome is ' + annIncome)
    console.log('Patient is in group ' +(group + 1)+  ' and has a fee of $' + payments[group])*/
    
    
    
    //update the entry fields

    show()   
    document.getElementById('annualIncome').innerHTML= '<b><font size = 5>Annual Income: $'+ numberWithCommas(annIncome) +'</font></b>'
    
    document.getElementById('monthlyIncome').innerHTML= '<b><font size = 5>Monthly Income: $'+ numberWithCommas((round((annIncome/12),2))) +'</font></b>'
    
    document.getElementById('slidingFeeGroup').innerHTML= '<b><font size = 5>Sliding Fee Group: '+ (group + 1) +'</font></b>'
    
    document.getElementById('patientPayment').innerHTML= '<b><font size = 5>Patient Pays: $'+ payments[group] +'</font></b>'
        
    }
    else {hide()}
    
    //dispay the group and fee for the patient
    
    
    
    
        });
}
