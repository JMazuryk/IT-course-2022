//
// function plan(NotHardday) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (NotHardday) {
//                 resolve('Arrange with my friend about meeting')
//             } else {
//                 reject('I will Go to swimming pool')
//             }
//         }, 200)
//     })
// }
//
// function friendsmeeting(IfIcall) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (IfIcall) {
//                 resolve('Will See today')
//             } else {
//                 reject('Will not see today')
//             }
//         })
//     }, 500)
// }
//
// function dinner(Wanttoeat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Wanttoeat) {
//                 resolve('Go to restaurant')
//             } else
//             {
//                 reject('Go for a walk')
//             }
//         }, 670)
//     })
// }

// plan(true)
//
//     .then((callmyfriend) => {
//         console.log(callmyfriend);
//         return friendsmeeting(callmyfriend)
//     })
//     .then((SeeYou) => {
//         console.log(SeeYou, 'HOOOREY')
//         return dinner(SeeYou)
//     })
//     .then((eat) => {
//         console.log(eat)
//     })
//     .catch((reason) => {
//         console.log('OOPPS', reason)
//     })
//     .finally(() => {
//         console.log('final')
//     })
// //
//
// async function Gplan () {
//     try {
//         const callmyfriend = await plan(true);
//         console.log(callmyfriend);
//
//         const SeeYou = await friendsmeeting(callmyfriend);
//         console.log(SeeYou, 'HOOOREY');
//
//         const eat = await dinner(SeeYou);
//         console.log(eat)
//     }
//     catch (e){
//         console.log('OOPPS', e)
//     }
// }
//
// Gplan()

function gotoswimming (Swpool) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (Swpool){
                resolve ('Go to swimming pool')
            } else {
                reject ('Not go to swimming pool')
            }
        },800)
    })
}

function planday (PlanSwimming) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(PlanSwimming){
                resolve ('Horrey, Go to Swimming pool')
            }else {
                reject ('stay at home')
            }
        })
    },1000)
}

function smwork (Swpoolwork){
    return new  Promise((resolve, reject) => {
        setTimeout(()=>{
            if (Swpoolwork){
                resolve ('Swim')
        } else  {
                reject('OOOPS, Go for a walk')

        }
    })
    },1500)
}

// planday(true)

// .then((S)=>{
//     console.log(S)
//     return smwork(S)
// })
//     .then ((smwork)=>{
//         console.log(smwork)
//     })
// // .catch(()=>{
// //     console.log('OOOPS, Stay at home')
// })

async function Swim () {
    try {
        const S = await planday(true);
        console.log(S);

        const smworks = await smwork(S);
        console.log(smworks);
    }
    catch (e) {
        console.log('OOOPS', e)
    }
}
Swim()