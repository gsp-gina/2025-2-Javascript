const {ask} =requiclsre ('../helpers/input.js');

async function main(){
      const age= Number(await ask('¿Cuantos años tienes Gina? '));
      if (age<18){
          console.log("menor de edad");
      }else if(age>=18 && age<65){
           console.log("mayor de edad");
      }else{

      }
}

main();