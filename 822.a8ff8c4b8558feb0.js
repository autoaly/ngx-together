"use strict";(self.webpackChunkngx_together=self.webpackChunkngx_together||[]).push([[822],{6822:(fe,$,_)=>{_.r($),_.d($,{TogetherInputSamplesModule:()=>oe});var S=_(433),M=_(6895),R=_(818),r=_(1571),A=_(8721),E=_(9549),F=_(4144),P=_(7647);function L(n,o,e,t,s,a,h){try{var p=n[a](h),i=p.value}catch(l){return void e(l)}p.done?o(i):Promise.resolve(i).then(t,s)}const Z=new r.OlP("ngx-mask config"),J=new r.OlP("new ngx-mask config"),j=new r.OlP("initial ngx-mask config"),G={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new r.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},z=["Hh:m0:s0","Hh:m0","m0:s0"],W=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let U=(()=>{class n{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,s,a,h)=>{let p=[],i="";if(Array.isArray(a)){const g=new RegExp(a.map(d=>"[\\^$.|?*+()".indexOf(d)>=0?`\\${d}`:d).join("|"));p=t.split(g),i=t.match(g)?.[0]??""}else p=t.split(a),i=a;const l=p.length>1?`${i}${p[1]}`:"";let f=p[0];const u=this.separatorLimit.replace(/\s/g,"");u&&+u&&(f="-"===f[0]?`-${f.slice(1,f.length).slice(0,u.length)}`:f.slice(0,u.length));const k=/(\d+)(\d{3})/;for(;s&&k.test(f);)f=f.replace(k,"$1"+s+"$2");return void 0===h?f+l:0===h?f:f+l.substr(0,h+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const s=t.split(".");return s.length>1?Number(s[s.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let s=this.suffix?.length-1;s>=0;s--){const a=this.suffix.substr(s,this.suffix?.length);if(t.includes(a)&&(s-1<0||!t.includes(this.suffix.substr(s-1,this.suffix?.length))))return t.replace(a,"")}return t},this.checkInputPrecision=(t,s,a)=>{if(s<1/0){if(Array.isArray(a)){const i=a.find(l=>l!==this.thousandSeparator);a=i||a[0]}const h=new RegExp(this._charToRegExpExpression(a)+`\\d{${s}}.*$`),p=t.match(h);p&&p[0].length-1>s&&(t=t.substring(0,t.length-(p[0].length-1-s))),0===s&&this._compareOrIncludes(t[t.length-1],a,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[s,a]=t;return this.customPattern=a,this.applyMask(e,s)}applyMask(e,t,s=0,a=!1,h=!1,p=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,l="",f=!1,u=!1,k=1,g=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const d=e.toString().split("");if("IP"===t){const m=e.split(".");this.ipError=this._validIP(m),t="099.099.099.099"}const x=[];for(let m=0;m<e.length;m++)e[m]?.match("\\d")&&x.push(e[m]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==x.length&&14!==x.length,t=x.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const m=this.getPrecision(t);e=this.checkInputPrecision(e,m,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),l=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!h?e.slice(1,e.length):e,h&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const m=this._charToRegExpExpression(this.thousandSeparator);let c='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(m,"");if(Array.isArray(this.decimalMarker))for(const y of this.decimalMarker)c=c.replace(this._charToRegExpExpression(y),"");else c=c.replace(this._charToRegExpExpression(this.decimalMarker),"");const v=new RegExp("["+c+"]");(e.match(v)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const N=this.getPrecision(t),H=(e=this.checkInputPrecision(e,N,this.decimalMarker)).replace(new RegExp(m,"g"),"");l=this._formatWithSeparators(H,this.thousandSeparator,this.decimalMarker,N);const D=l.indexOf(",")-e.indexOf(","),C=l.length-e.length;if(C>0&&","!==l[s]){u=!0;let y=0;do{this._shift.add(s+y),y++}while(y<C)}else 0!==D&&s>0&&!(l.indexOf(",")>=s&&s>3)||!(l.indexOf(".")>=s&&s>3)&&C<=0?(this._shift.clear(),u=!0,k=C,this._shift.add(s+=C)):this._shift.clear()}else for(let m=0,c=d[0];m<d.length&&i!==t.length;m++,c=d[m])if(this._checkSymbolMask(c,t[i])&&"?"===t[i+1])l+=c,i+=2;else if("*"===t[i+1]&&f&&this._checkSymbolMask(c,t[i+2]))l+=c,i+=3,f=!1;else if(this._checkSymbolMask(c,t[i])&&"*"===t[i+1])l+=c,f=!0;else if("?"===t[i+1]&&this._checkSymbolMask(c,t[i+2]))l+=c,i+=3;else if(this._checkSymbolMask(c,t[i])){if("H"===t[i]&&Number(c)>2){i+=1,this._shiftStep(t,i,d.length),m--,this.leadZeroDateTime&&(l+="0");continue}if("h"===t[i]&&"2"===l&&Number(c)>3){i+=1,m--;continue}if("m"===t[i]&&Number(c)>5){i+=1,this._shiftStep(t,i,d.length),m--,this.leadZeroDateTime&&(l+="0");continue}if("s"===t[i]&&Number(c)>5){i+=1,this._shiftStep(t,i,d.length),m--,this.leadZeroDateTime&&(l+="0");continue}const v=31;if("d"===t[i]&&(Number(c)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>v||"/"===e[i+1])){i+=1,this._shiftStep(t,i,d.length),m--,this.leadZeroDateTime&&(l+="0");continue}if("M"===t[i]){const H=0===i&&(Number(c)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),D=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),C=Number(e.slice(i-3,i-1))<=v&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),y=Number(e.slice(i-3,i-1))>v&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,ce=Number(e.slice(i-3,i-1))<=v&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(c)>1&&this.leadZeroDateTime||H||D||C||y||ce){i+=1,this._shiftStep(t,i,d.length),m--,this.leadZeroDateTime&&(l+="0");continue}}l+=c,i++}else" "===c&&" "===t[i]?(l+=c,i++):-1!==this.maskSpecialCharacters.indexOf(t[i])?(l+=t[i],i++,this._shiftStep(t,i,d.length),m--):this.maskSpecialCharacters.indexOf(c)>-1&&this.maskAvailablePatterns[t[i]]&&this.maskAvailablePatterns[t[i]]?.optional?(!!d[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(l+=d[i]),i++,m--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(c)===this.maskExpression[i+2]&&f||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(c)===this.maskExpression[i+2]&&f?(i+=3,l+=c):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(c)<0&&c!==this.placeHolderCharacter&&(g=!0);l.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(l+=t[t.length-1]);let b=s+1;for(;this._shift.has(b);)k++,b++;let T=a&&!t.startsWith("separator")?i:this._shift.has(s)?k:0;g&&T--,p(T,u),k<0&&this._shift.clear();let w=!1;h&&(w=d.every(m=>this.maskSpecialCharacters.includes(m)));let I=`${this.prefix}${w?"":l}${this.suffix}`;return 0===l.length&&(I=`${this.prefix}${l}`),I}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((t,s)=>t.match("^-?\\d")||t.match("\\s")||"."===t||","===t||"-"===t&&0===s&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,s){const a=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(a+this.prefix.length||0)}_compareOrIncludes(e,t,s){return Array.isArray(t)?t.filter(a=>a!==s).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,s)=>e.length!==s+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(Z))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})(),B=(()=>{class n extends U{constructor(e,t,s,a){super(t),this.document=e,this._config=t,this._elementRef=s,this._renderer=a,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=h=>{}}applyMask(e,t,s=0,a=!1,h=!1,p=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const i=e&&"number"==typeof this.selStart?e[this.selStart]:"";let l="";if(void 0!==this.hiddenInput&&!this.writingValue){let g=this.actualValue.split("");""!==e&&g.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>g.length?g.splice(this.selStart,0,i):e.length<g.length&&(g.length-e.length==1?g.splice(this.selStart-1,1):g.splice(this.selStart,this.selEnd-this.selStart))):g=[],this.showMaskTyped&&(e=this.removeMask(e)),l=this.actualValue.length&&g.length<=e.length?this.shiftTypedSymbols(g.join("")):e}l=Boolean(l)&&l.length?l:e;const f=super.applyMask(l,t,s,a,h,p);if(this.actualValue=this.getActualValue(f),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(g=>!this._compareOrIncludes(g,this.decimalMarker,this.thousandSeparator))),this.formControlResult(f),!this.showMaskTyped)return this.hiddenInput&&f&&f.length?this.hideInput(f,this.maskExpression):f;const u=f.length,k=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const g=this._numberSkipedSymbols(f);return f+k.slice(u+g)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?f+k:f+k.slice(u)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let s=t.exec(e),a=0;for(;null!=s;)a+=1,s=t.exec(e);return a}applyValueChanges(e,t,s,a=(()=>{})){const h=this._elementRef.nativeElement;h.value=this.applyMask(h.value,this.maskExpression,e,t,s,a),h!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((s,a)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[a]]&&this.maskAvailablePatterns[t[a]]?.symbol?this.maskAvailablePatterns[t[a]]?.symbol:s).join("")}getActualValue(e){const t=e.split("").filter((s,a)=>this._checkSymbolMask(s,this.maskExpression[a])||this.maskSpecialCharacters.includes(this.maskExpression[a])&&s===this.maskExpression[a]);return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((a,h)=>{if(this.maskSpecialCharacters.includes(e[h+1])&&e[h+1]!==this.maskExpression[h+1])return t=a,e[h+1];if(t.length){const p=t;return t="",p}return a})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(s=>this._findSpecialChar(s)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let s=0;s<e.length;s++)e[s]?.match("\\d")&&t.push(e[s]);return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,s=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const a=[];for(let h=0;h<e.length;h++)e[h]?.match("\\d")&&a.push(e[h]);return a.length<=3?t.slice(a.length,t.length):a.length>3&&a.length<=6?t.slice(a.length+1,t.length):a.length>6&&a.length<=9?t.slice(a.length+2,t.length):a.length>9&&a.length<11?t.slice(a.length+3,t.length):11===a.length?"":12===a.length?s.slice(17===e.length?16:15,s.length):a.length>12&&a.length<=14?s.slice(a.length+4,s.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression);let s=this._retrieveSeparatorValue(e);return"."!==this.decimalMarker&&!Array.isArray(this.decimalMarker)&&(s=s.replace(this.decimalMarker,".")),this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,s):Number(s):s}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(M.K0),r.LFG(Z),r.LFG(r.SBq),r.LFG(r.Qsj))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})(),Y=(()=>{class n{constructor(e,t,s){this.document=e,this._maskService=t,this._config=s,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new r.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=a=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:s,patterns:a,prefix:h,suffix:p,thousandSeparator:i,decimalMarker:l,dropSpecialCharacters:f,hiddenInput:u,showMaskTyped:k,placeHolderCharacter:g,shownMaskExpression:d,showTemplate:x,clearIfNotMatch:b,validation:T,separatorLimit:w,allowNegativeNumbers:I,leadZeroDateTime:m,triggerOnMaskChange:c}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((v,N)=>v.length-N.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),s){if(!s.currentValue||!Array.isArray(s.currentValue))return;this._maskService.maskSpecialCharacters=s.currentValue||[]}a&&a.currentValue&&(this._maskService.maskAvailablePatterns=a.currentValue),h&&(this._maskService.prefix=h.currentValue),p&&(this._maskService.suffix=p.currentValue),i&&(this._maskService.thousandSeparator=i.currentValue),l&&(this._maskService.decimalMarker=l.currentValue),f&&(this._maskService.dropSpecialCharacters=f.currentValue),u&&(this._maskService.hiddenInput=u.currentValue),k&&(this._maskService.showMaskTyped=k.currentValue),g&&(this._maskService.placeHolderCharacter=g.currentValue),d&&(this._maskService.shownMaskExpression=d.currentValue),x&&(this._maskService.showTemplate=x.currentValue),b&&(this._maskService.clearIfNotMatch=b.currentValue),T&&(this._maskService.validation=T.currentValue),w&&(this._maskService.separatorLimit=w.currentValue),I&&(this._maskService.allowNegativeNumbers=I.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(v=>"-"!==v))),m&&(this._maskService.leadZeroDateTime=m.currentValue),c&&(this._maskService.triggerOnMaskChange=c.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||W.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(z.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const s in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[s].optional&&(this._maskValue.indexOf(s)!==this._maskValue.lastIndexOf(s)?t+=this._maskValue.split("").filter(h=>h===s).join("").length:-1!==this._maskValue.indexOf(s)&&t++,-1!==this._maskValue.indexOf(s)&&e.toString().length>=this._maskValue.indexOf(s)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number(this._maskValue.split("{")[1].split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const s=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<s)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){(""===e||null==e)&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let a=0,h=!1;if(this._maskService.applyValueChanges(s,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(i,l)=>{this._justPasted=!1,a=i,h=l}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let p=this._position?this._inputValue.length+s+a:s+("Backspace"!==this._code||h?a:0);p>this._getActualInputLength()&&(p=this._getActualInputLength()),p<0&&(p=0),t.setSelectionRange(p,p),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const h=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==h&&(t.value=h),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes(this._inputValue[t.selectionStart-1].toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault();const s=t.selectionStart;8===e.keyCode&&!t.readOnly&&0===s&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return function Q(n){return function(){var o=this,e=arguments;return new Promise(function(t,s){var a=n.apply(o,e);function h(i){L(a,t,s,h,p,"next",i)}function p(i){L(a,t,s,h,p,"throw",i)}h(void 0)})}}(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this.onChange=e,this._maskService.onChange=this.onChange}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,s,a)=>{if(this._start="{"===s?a:this._start,"}"!==s)return this._maskService._findSpecialChar(s)?t+s:t;this._end=a;const h=Number(e.slice(this._start+1,this._end));return t+new Array(h+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(s=>":"!==s).length;return e&&(0==+e[e.length-1]&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this._maskExpressionArray[this._maskExpressionArray.length-1],this.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1],this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]})}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(M.K0),r.Y36(B),r.Y36(Z))},n.\u0275dir=r.lG2({type:n,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&r.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(a){return t.onModelChange(a)})("input",function(a){return t.onInput(a)})("blur",function(){return t.onBlur()})("click",function(a){return t.onClick(a)})("keydown",function(a){return t.onKeyDown(a)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[r._Bn([{provide:S.JU,useExisting:(0,r.Gpc)(()=>n),multi:!0},{provide:S.Cf,useExisting:(0,r.Gpc)(()=>n),multi:!0},B]),r.TTD]}),n})();function K(n,o){return o instanceof Function?{...n,...o()}:{...n,...o}}let X=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:J,useValue:e},{provide:j,useValue:G},{provide:Z,useFactory:K,deps:[j,J]},U]}}static forChild(){return{ngModule:n}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})();const q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};q.KeyboardEvent||(q.KeyboardEvent=function(n,o){});var O=_(9090);function V(n,o){if(1&n&&r._UZ(0,"ngx-together-label",8),2&n){const e=r.oxw(2);r.Q6J("label",e.isRequired?" *":"")}}function ee(n,o){if(1&n&&(r.TgZ(0,"div",5),r._UZ(1,"ngx-together-label",6),r.YNc(2,V,1,1,"ngx-together-label",7),r.qZA()),2&n){const e=r.oxw();r.xp6(1),r.Q6J("label",e.label),r.xp6(1),r.Q6J("ngIf",e.label)}}function te(n,o){if(1&n&&(r.TgZ(0,"small",9),r._uU(1),r.ALo(2,"lang"),r.qZA()),2&n){const e=r.oxw();r.xp6(1),r.Oqu(r.lcZ(2,1,e.tip))}}function re(n,o){if(1&n&&(r.TgZ(0,"mat-label"),r._uU(1),r.ALo(2,"lang"),r.qZA()),2&n){const e=r.oxw();r.xp6(1),r.AsE("",r.lcZ(2,2,e.label||e.placeholder)," ",e.isRequired?" *":"","")}}function se(n,o){if(1&n&&(r.TgZ(0,"mat-error"),r._uU(1),r.ALo(2,"validation"),r.qZA()),2&n){const e=r.oxw();r.xp6(1),r.Oqu(r.lcZ(2,1,null==e.controller?null:e.controller.errors))}}let ie=(()=>{class n extends A.Ye{constructor(){super(),this.blur=new r.vpe,this.iconClassName="",this.type="text",this.placeholder="",this.hintLabel="",this.patterns="/[^]*/",this.appearance="outline","text"!=this.type&&(this.mask="",this.patterns=null),this.patterns&&"/[^]*/"!=this.patterns&&(this.customPatterns={0:{pattern:new RegExp(this.patterns)}})}ngOnInit(){}onBlur(e){this.blur.emit(e)}get emailError(){let e=this.controller?.errors;return e?e.email:""}get maxLengthError(){let e=this.controller?.errors;return e?e.maxlength:""}get minLengthError(){let e=this.controller?.errors;return e?e.minlength:""}get invalidError(){let e=this.controller?.errors;return e?Object.keys(e)[0]:""}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["ngx-together-input"]],inputs:{iconClassName:"iconClassName",type:"type",placeholder:"placeholder",hintLabel:"hintLabel",mask:"mask",patterns:"patterns",min:"min",max:"max",prefix:"prefix",placeHolderCharacter:"placeHolderCharacter",fieldDesignType:"fieldDesignType",appearance:"appearance"},outputs:{blur:"blur"},features:[r.qOj],decls:9,vars:23,consts:[["class","mb-1 ",4,"ngIf"],["class","text-secondary",4,"ngIf"],[3,"appearance"],[4,"ngIf"],["matInput","",2,"direction","initial !important",3,"type","id","placeholder","formControl","patterns","mask","min","max","prefix","placeHolderCharacter","showMaskTyped","autocomplete","blur"],[1,"mb-1"],[1,"bold-font",3,"label"],["class","text-danger bold-font",3,"label",4,"ngIf"],[1,"text-danger","bold-font",3,"label"],[1,"text-secondary"]],template:function(e,t){1&e&&(r.YNc(0,ee,3,2,"div",0),r.TgZ(1,"div"),r.YNc(2,te,3,3,"small",1),r.qZA(),r.TgZ(3,"mat-form-field",2),r.YNc(4,re,3,4,"mat-label",3),r.TgZ(5,"input",4),r.NdJ("blur",function(a){return t.onBlur(a)}),r.ALo(6,"lang"),r.ALo(7,"lang"),r.qZA(),r.YNc(8,se,3,3,"mat-error",3),r.qZA()),2&e&&(r.Q6J("ngIf",t.label),r.xp6(2),r.Q6J("ngIf",t.tip),r.xp6(1),r.Q6J("appearance",t.appearance),r.xp6(1),r.Q6J("ngIf",!t.label),r.xp6(1),r.s9C("type",t.type),r.s9C("id",t.getControlName()),r.s9C("placeholder",r.lcZ(6,19,t.placeholder||t.label)),r.s9C("placeholder",r.lcZ(7,21,t.placeholder)),r.s9C("autocomplete",t.hasAutoComplete?"on":"off"),r.Q6J("formControl",t.controller)("patterns",t.customPatterns)("mask",t.mask)("min",t.min)("max",t.max)("prefix",t.prefix?t.prefix:"")("placeHolderCharacter",t.placeHolderCharacter?t.placeHolderCharacter:"_")("showMaskTyped",!!t.mask),r.uIk("disabled",!!t.disabled||null),r.xp6(3),r.Q6J("ngIf",null==t.controller?null:t.controller.errors))},dependencies:[E.TO,E.KE,E.hX,F.Nt,P.dk,Y,S.Fj,S.JJ,S.oH,M.O5,O.bF,A.D2],styles:["[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{width:25px;height:25px;display:inline-block}[_nghost-%COMP%]   .hintLabel[_ngcontent-%COMP%]{font-size:x-small;margin-left:5px}[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:inherit!important}[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})();const ae={validation:!1};let ne=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[O.bF,A.D2],imports:[E.lN,F.c,P.$T,O.dS,X.forRoot(ae),S.UX,A.om,M.ez]}),n})();const le=[{path:"",title:"Input Samples",component:(()=>{class n{constructor(e){this._fb=e,this.form=e.group({name:["",[S.kI.nullValidator]],family:["",[S.kI.required]]})}ngOnInit(){}getCtrl(e){return this.form.controls[e]}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(S.qu))},n.\u0275cmp=r.Xpm({type:n,selectors:[["ngx-together-together-input-samples"]],decls:43,vars:11,consts:[[1,"mt-3"],["label","Appearance of Inputs"],[1,"row"],[1,"col-xl-3","col-lg-4","col-md-6","col-sm-12"],["label","outline","appearance","outline",3,"controller"],["label","legacy","appearance","legacy",3,"controller"],["label","standard","appearance","standard",3,"controller"],["label","fill","appearance","fill",3,"controller"],["label","Type of Inputs"],["label","Text","type","text",3,"controller"],["label","password","type","password",3,"controller"],["label","number","type","number",3,"controller"],["label","Tips and Validation"],["label","Name","tip","this is a tip to  help user",3,"controller"],["label","family","tip"," required field",3,"controller"],["label","Mask"],["label","Name","tip","using mask","mask","(000) 000-0000",3,"controller"],["label","Name","tip","using mask","mask","00/00/0000",3,"controller"],["label","for more masks visit :"],["href","        https://jsdaddy.github.io/ngx-mask-page/main","target","_blank"]],template:function(e,t){1&e&&(r.TgZ(0,"h3",0),r._UZ(1,"ngx-together-label",1),r.qZA(),r._UZ(2,"hr"),r.TgZ(3,"div",2)(4,"div",3),r._UZ(5,"ngx-together-input",4),r.qZA(),r.TgZ(6,"div",3),r._UZ(7,"ngx-together-input",5),r.qZA(),r.TgZ(8,"div",3),r._UZ(9,"ngx-together-input",6),r.qZA(),r.TgZ(10,"div",3),r._UZ(11,"ngx-together-input",7),r.qZA()(),r.TgZ(12,"h3",0),r._UZ(13,"ngx-together-label",8),r.qZA(),r._UZ(14,"hr"),r.TgZ(15,"div",2)(16,"div",3),r._UZ(17,"ngx-together-input",9),r.qZA(),r.TgZ(18,"div",3),r._UZ(19,"ngx-together-input",10),r.qZA(),r.TgZ(20,"div",3),r._UZ(21,"ngx-together-input",11),r.qZA()(),r.TgZ(22,"h3",0),r._UZ(23,"ngx-together-label",12),r.qZA(),r._UZ(24,"hr"),r.TgZ(25,"div",2)(26,"div",3),r._UZ(27,"ngx-together-input",13),r.qZA(),r.TgZ(28,"div",3),r._UZ(29,"ngx-together-input",14),r.qZA()(),r.TgZ(30,"h3",0),r._UZ(31,"ngx-together-label",15),r.qZA(),r._UZ(32,"hr"),r.TgZ(33,"div",2)(34,"div",3),r._UZ(35,"ngx-together-input",16),r.qZA(),r.TgZ(36,"div",3),r._UZ(37,"ngx-together-input",17),r.qZA()(),r.TgZ(38,"div",2)(39,"p"),r._UZ(40,"ngx-together-label",18),r.TgZ(41,"a",19),r._uU(42,"https://jsdaddy.github.io/ngx-mask-page/main"),r.qZA()()()),2&e&&(r.xp6(5),r.Q6J("controller",t.getCtrl("name")),r.xp6(2),r.Q6J("controller",t.getCtrl("name")),r.xp6(2),r.Q6J("controller",t.getCtrl("name")),r.xp6(2),r.Q6J("controller",t.getCtrl("name")),r.xp6(6),r.Q6J("controller",t.getCtrl("name")),r.xp6(2),r.Q6J("controller",t.getCtrl("name")),r.xp6(2),r.Q6J("controller",t.getCtrl("name")),r.xp6(6),r.Q6J("controller",t.getCtrl("name")),r.xp6(2),r.Q6J("controller",t.getCtrl("family")),r.xp6(6),r.Q6J("controller",t.getCtrl("name")),r.xp6(2),r.Q6J("controller",t.getCtrl("name")))},dependencies:[ie,P.dk]}),n})()}];let he=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[R.Bz.forChild(le),R.Bz]}),n})(),oe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[M.ez,he,ne,S.UX,S.u5,P.$T]}),n})()}}]);