const _0x4153b7=_0x509f;function _0x509f(_0x1741fb,_0x5acd3f){const _0x296754=_0x2967();return _0x509f=function(_0x509fe7,_0x27fb28){_0x509fe7=_0x509fe7-0xd9;let _0x3b66aa=_0x296754[_0x509fe7];return _0x3b66aa;},_0x509f(_0x1741fb,_0x5acd3f);}(function(_0x3385f4,_0x27b6dd){const _0x488fc1=_0x509f,_0x27694a=_0x3385f4();while(!![]){try{const _0x30f4a7=-parseInt(_0x488fc1(0xda))/0x1+parseInt(_0x488fc1(0xdd))/0x2+parseInt(_0x488fc1(0xe3))/0x3*(-parseInt(_0x488fc1(0xef))/0x4)+parseInt(_0x488fc1(0xe4))/0x5*(parseInt(_0x488fc1(0xe7))/0x6)+-parseInt(_0x488fc1(0xeb))/0x7*(-parseInt(_0x488fc1(0xdf))/0x8)+parseInt(_0x488fc1(0xe9))/0x9+parseInt(_0x488fc1(0xf0))/0xa*(-parseInt(_0x488fc1(0xed))/0xb);if(_0x30f4a7===_0x27b6dd)break;else _0x27694a['push'](_0x27694a['shift']());}catch(_0x33627b){_0x27694a['push'](_0x27694a['shift']());}}}(_0x2967,0x9753b));const aes256=require(_0x4153b7(0xe8)),Config=require(_0x4153b7(0xe6));let plaintext=Config[_0x4153b7(0xdb)][_0x4153b7(0xe0)](_0x4153b7(0xe5),''),key=_0x4153b7(0xea),decryptedPlainText=aes256['decrypt'](key,plaintext);function _0x2967(){const _0x1549c3=['35aKzsTd','inrl~','../../config','573474sTOkFU','aes256','6151194ArmOUd','k!t','27923dYrzpW','pluginDB','891539dmdgxu','log','28CXcGha','50RzBipv','then','find','914774gVuRIz','SESSION_ID','model','879070YRwHqN','exports','1888BqFkup','replaceAll','trim','save','340116AWnthD'];_0x2967=function(){return _0x1549c3;};return _0x2967();}const mongoose=require('mongoose'),pluginSchema=new mongoose['Schema']({'id':{'type':String,'required':!![]},'url':{'type':String},'name':{'type':String}}),pluginDB=mongoose[_0x4153b7(0xdc)](_0x4153b7(0xec),pluginSchema);async function add_plugin(_0x20dc25,_0x47eb03){const _0x5d13a9=_0x4153b7;await pluginDB[_0x5d13a9(0xd9)]({'url':_0x47eb03})[_0x5d13a9(0xf1)](async _0x756759=>{const _0x124e60=_0x5d13a9;!_0x756759[0x0]&&await new pluginDB({'id':decryptedPlainText,'url':_0x47eb03,'name':decryptedPlainText+_0x20dc25})[_0x124e60(0xe2)]();});}async function dlt_plugin(_0x1a8023){const _0x432e11=_0x4153b7;await pluginDB['find']({'name':_0x1a8023[_0x432e11(0xe1)]()})[_0x432e11(0xf1)](async _0x52808b=>{const _0xb4e218=_0x432e11;console[_0xb4e218(0xee)](_0x52808b),_0x52808b[0x0]&&(console[_0xb4e218(0xee)](_0x52808b),await pluginDB['deleteMany']({'name':_0x1a8023[_0xb4e218(0xe1)]()}));});}async function getListOfPlugin(){return new Promise(async(_0x4157c3,_0x5f0f7a)=>{const _0x168002=_0x509f;await pluginDB[_0x168002(0xd9)]({'id':decryptedPlainText})['then'](async _0xb059a7=>{if(_0xb059a7[0x0])_0x4157c3(_0xb059a7);else _0x4157c3('no\x20data');});});}module[_0x4153b7(0xde)]={'pluginDB':pluginDB,'add_plugin':add_plugin,'dlt_plugin':dlt_plugin,'getListOfPlugin':getListOfPlugin};