const { ovl } = require('../lib/ovl');

const boyDPs = [
"https://i.ibb.co/XYZ/boy1.jpg",
"https://i.ibb.co/XYZ/boy2.jpg",
"https://i.ibb.co/XYZ/boy3.jpg",
"https://i.ibb.co/XYZ/boy4.jpg",
"https://i.ibb.co/XYZ/boy5.jpg"
];

const girlDPs = [
"https://i.ibb.co/ABC/girl1.jpg",
"https://i.ibb.co/ABC/girl2.jpg",
"https://i.ibb.co/ABC/girl3.jpg",
"https://i.ibb.co/ABC/girl4.jpg",
"https://i.ibb.co/ABC/girl5.jpg"
];


ovl({
    nomCom: "boydp",
    categorie: "DP",
    reaction: "😎"
}, async (dest, zk, commandeOptions) => {
    const { ms } = commandeOptions;
    let random = boyDPs[Math.floor(Math.random() * boyDPs.length)];
    await zk.sendMessage(dest, { image: { url: random }, caption: "*BOY DP* 😎\n*By OVL-MD*" }, { quoted: ms });
})

ovl({
    nomCom: "girldp",
    categorie: "DP",
    reaction: "💅"
}, async (dest, zk, commandeOptions) => {
    const { ms } = commandeOptions;
    let random = girlDPs[Math.floor(Math.random() * girlDPs.length)];
    await zk.sendMessage(dest, { image: { url: random }, caption: "*GIRL DP* 💅\n*By OVL-MD*" }, { quoted: ms });
})
