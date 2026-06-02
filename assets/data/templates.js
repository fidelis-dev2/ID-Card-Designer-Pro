const ID_TEMPLATES = {
front: [
  {id:'corporate-blue', name:'Corporate Blue Front', preview:'linear-gradient(135deg,#0f172a 0%,#1d4ed8 45%,#ffffff 46%)', objects:[
    {type:'rect',left:0,top:0,width:1011,height:638,fill:'#ffffff',selectable:false,evented:false,name:'Background'},
    {type:'rect',left:0,top:0,width:1011,height:155,fill:'#0f172a',name:'Top Header'},
    {type:'rect',left:0,top:155,width:1011,height:8,fill:'#f59e0b',name:'Gold Line'},
    {type:'text',text:'COMPANY / ORGANIZATION',left:40,top:35,fontSize:34,fontWeight:'800',fill:'#ffffff',name:'Organization Name'},
    {type:'text',text:'EMPLOYEE ID CARD',left:43,top:84,fontSize:18,fill:'#cbd5e1',name:'Card Label'},
    {type:'photo',left:60,top:210,width:230,height:280,fill:'#e5e7eb',stroke:'#1d4ed8',strokeWidth:4,name:'Passport Photo'},
    {type:'text',text:'FULL NAME',left:335,top:220,fontSize:46,fontWeight:'800',fill:'#111827',name:'Full Name'},
    {type:'text',text:'System Developer',left:338,top:280,fontSize:26,fill:'#2563eb',name:'Position'},
    {type:'text',text:'ID: CCL-0001',left:340,top:340,fontSize:24,fill:'#374151',name:'ID Number'},
    {type:'text',text:'Phone: +255 700 000 000',left:340,top:386,fontSize:22,fill:'#374151',name:'Phone'},
    {type:'qr',text:'https://cohema.co.tz',left:820,top:445,size:125,name:'QR Code'}]},
  {id:'student-red', name:'Student Front', preview:'linear-gradient(135deg,#7f1d1d,#fee2e2)', objects:[
    {type:'rect',left:0,top:0,width:1011,height:638,fill:'#fff7ed',selectable:false,evented:false,name:'Background'},
    {type:'rect',left:0,top:0,width:280,height:638,fill:'#991b1b',name:'Left Band'},
    {type:'text',text:'SCHOOL NAME',left:315,top:48,fontSize:40,fontWeight:'800',fill:'#991b1b',name:'School Name'},
    {type:'text',text:'STUDENT ID CARD',left:318,top:100,fontSize:21,fill:'#7f1d1d',name:'Card Type'},
    {type:'photo',left:62,top:150,width:160,height:200,fill:'#ffffff',stroke:'#ffffff',strokeWidth:5,name:'Student Photo'},
    {type:'text',text:'ALEX JOHN',left:315,top:190,fontSize:44,fontWeight:'800',fill:'#111827',name:'Student Name'},
    {type:'text',text:'Class: Form IV',left:318,top:260,fontSize:25,fill:'#374151',name:'Class'},
    {type:'text',text:'Admission No: ADM-0098',left:318,top:305,fontSize:25,fill:'#374151',name:'Admission'},
    {type:'text',text:'Emergency: +255 711 111 111',left:318,top:350,fontSize:23,fill:'#374151',name:'Emergency'},
    {type:'qr',text:'ADM-0098',left:825,top:430,size:130,name:'QR Code'}]}
],
back: [
  {id:'corporate-back', name:'Corporate Back', preview:'linear-gradient(135deg,#ffffff,#0f172a)', objects:[
    {type:'rect',left:0,top:0,width:1011,height:638,fill:'#ffffff',selectable:false,evented:false,name:'Background'},
    {type:'rect',left:0,top:0,width:1011,height:105,fill:'#0f172a',name:'Back Header'},
    {type:'text',text:'TERMS AND CONDITIONS',left:55,top:36,fontSize:30,fontWeight:'800',fill:'#ffffff',name:'Terms Title'},
    {type:'text',text:'This card remains property of the organization. If found, please return it to the address below.',left:55,top:155,width:760,fontSize:25,fill:'#111827',name:'Terms'},
    {type:'text',text:'Address: P.O. Box 1954, Iringa - Tanzania',left:55,top:260,fontSize:24,fill:'#374151',name:'Address'},
    {type:'text',text:'Email: info@cohema.co.tz | Phone: 0761610188',left:55,top:305,fontSize:24,fill:'#374151',name:'Contact'},
    {type:'barcode',text:'CCL00012026',left:310,top:430,width:420,height:90,name:'Barcode'},
    {type:'text',text:'Authorized Signature',left:390,top:548,fontSize:22,fill:'#0f172a',name:'Signature'}]},
  {id:'student-back', name:'Student Back', preview:'linear-gradient(135deg,#fee2e2,#991b1b)', objects:[
    {type:'rect',left:0,top:0,width:1011,height:638,fill:'#fff7ed',selectable:false,evented:false,name:'Background'},
    {type:'rect',left:0,top:0,width:1011,height:85,fill:'#991b1b',name:'Header'},
    {type:'text',text:'MAELEKEZO YA KITAMBULISHO',left:55,top:27,fontSize:28,fontWeight:'800',fill:'#ffffff',name:'Title'},
    {type:'text',text:'1. Kitambulisho hiki kitumike na mwanafunzi husika pekee.\n2. Kikipotea taarifa itolewe ofisini.\n3. Kikiokotwa kirudishwe shuleni.',left:70,top:140,width:820,fontSize:28,fill:'#111827',name:'Instructions'},
    {type:'qr',text:'ADM-0098',left:80,top:420,size:135,name:'QR Code'},
    {type:'text',text:'School Stamp / Signature',left:600,top:470,fontSize:26,fill:'#991b1b',name:'Stamp'}]}
]};
