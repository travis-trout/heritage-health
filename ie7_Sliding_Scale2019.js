
var patientGroup, familyNumber, patientincome, scaleLevels, payments;

scaleLevels = [0,1,2,3,4,5];
payments = [25,35,45,55,65,80];
function findPayScale(familyNumber,annualIncome){
// if 1 family member
	if (familyNumber === 1){
		if (annualIncome <= 12490){
			return scaleLevels[0]
		}
		if (annualIncome <= 16611){
			return scaleLevels[1]
		}
		if (annualIncome <= 18735){
			return scaleLevels[2]
		}
		if (annualIncome <= 21857){
			return scaleLevels[3]
		}
		if (annualIncome <= 24980){
			return scaleLevels[4]
		}
		if (annualIncome >= 24981){
			return scaleLevels[5]
		}
	};
//if 2 family members
	if (familyNumber === 2){
		if (annualIncome <= 16910){
			return scaleLevels[0]
		};
		if (annualIncome <= 22490){
			return scaleLevels[1]
		};
		if (annualIncome <= 25365){
			return scaleLevels[2]
		};
		if (annualIncome <= 29592){
			return scaleLevels[3]
		};
		if (annualIncome <= 33820){
			return scaleLevels[4]
		};
		if (annualIncome >= 33821){
			return scaleLevels[5]
		};
	};
//if 3 family members
	if (familyNumber === 3){
		if (annualIncome <= 21330){
			return scaleLevels[0]
		};
		if (annualIncome <= 28368){
			return scaleLevels[1]
		};
		if (annualIncome <= 31995){
			return scaleLevels[2]
		};
		if (annualIncome <= 37327){
			return scaleLevels[3]
		};
		if (annualIncome <= 42660){
			return scaleLevels[4]
		};
		if (annualIncome >= 42661){
			return scaleLevels[5]
		};
	};

	//if 4 family members
	if (familyNumber === 4){
		if (annualIncome <= 25750){
			return scaleLevels[0]
		};
		if (annualIncome <= 34247){
			return scaleLevels[1]
		};
		if (annualIncome <= 38625){
			return scaleLevels[2]
		};
		if (annualIncome <= 45062){
			return scaleLevels[3]
		};
		if (annualIncome <= 51500){
			return scaleLevels[4]
		};
		if (annualIncome >= 51501){
			return scaleLevels[5]
		};
	};

//if 5 family members
	if (familyNumber === 5){
		if (annualIncome <= 30170){
			return scaleLevels[0]
		};
		if (annualIncome <= 40126){
			return scaleLevels[1]
		};
		if (annualIncome <= 45255){
			return scaleLevels[2]
		};
		if (annualIncome <= 52797){
			return scaleLevels[3]
		};
		if (annualIncome <= 60340){
			return scaleLevels[4]
		};
		if (annualIncome >= 60341){
			return scaleLevels[5]
		};
	};

//if 6 family members
	if (familyNumber === 6){
		if (annualIncome <= 34590){
			return scaleLevels[0]
		};
		if (annualIncome <= 46004){
			return scaleLevels[1]
		};
		if (annualIncome <= 51885){
			return scaleLevels[2]
		};
		if (annualIncome <= 60532){
			return scaleLevels[3]
		};
		if (annualIncome <= 69180){
			return scaleLevels[4]
		};
		if (annualIncome >= 69181){
			return scaleLevels[5]
		};
	};

//if 7 family members
	if (familyNumber === 7){
		if (annualIncome <= 39010){
			return scaleLevels[0]
		};
		if (annualIncome <= 51883){
			return scaleLevels[1]
		};
		if (annualIncome <= 58515){
			return scaleLevels[2]
		};
		if (annualIncome <= 68267){
			return scaleLevels[3]
		};
		if (annualIncome <= 78020){
			return scaleLevels[4]
		};
		if (annualIncome >= 78021){
			return scaleLevels[5]
		};
	};

//if 8 family members
	if (familyNumber === 8){
		if (annualIncome <= 43430){
			return scaleLevels[0]
		};
		if (annualIncome <= 57761){
			return scaleLevels[1]
		};
		if (annualIncome <= 65145){
			return scaleLevels[2]
		};
		if (annualIncome <= 76002){
			return scaleLevels[3]
		};
		if (annualIncome <= 86860){
			return scaleLevels[4]
		};
		if (annualIncome >= 86861){
			return scaleLevels[5]
		};
	};

//if 9 family members
	if (familyNumber === 9){
		if (annualIncome <= 47850){
			return scaleLevels[0]
		};
		if (annualIncome <= 62639){
			return scaleLevels[1]
		};
		if (annualIncome <= 71775){
			return scaleLevels[2]
		};
		if (annualIncome <= 83737){
			return scaleLevels[3]
		};
		if (annualIncome <= 95700){
			return scaleLevels[4]
		};
		if (annualIncome >= 95701){
			return scaleLevels[5]
		};
	};

//if 10 or more family members
	if (familyNumber >= 10){
		if (annualIncome <= 52270){
			return scaleLevels[0]
		};
		if (annualIncome <= 69517){
			return scaleLevels[1]
		};
		if (annualIncome <= 78405){
			return scaleLevels[2]
		};
		if (annualIncome <= 91472){
			return scaleLevels[3]
		};
		if (annualIncome <= 104540){
			return scaleLevels[4]
		};
		if (annualIncome >= 10541){
			return scaleLevels[5]
		};
	};
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