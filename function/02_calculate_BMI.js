var weight=58.6;
var height=1.60;
bmi=Number(weight/(height*height));
if(bmi<=18.5){
    console.log(`Your Body Mass Index is:${bmi} and You are Underweight.`);
}else if(bmi <=24.9 && bmi >=18.6){
     console.log(`Your Body Mass Index is:${bmi} and You are Healthy.`);
}else if(bmi <=24.9 && bmi >=18.6){
    console.log(`Your Body Mass Index is:${bmi} and You are Overweight.`);
}else if(bmi <=25.9 && bmi >=25){
    console.log(`Your Body Mass Index is:${bmi} and You are Healthy.`);
}else{
    console.log(`Your Body Mass Index is:${bmi} and You are Obese.`);
}