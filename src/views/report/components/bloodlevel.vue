<template>
    <div>
        <table class="bloodLevel" style="width:60vw;">
            <tr style="background:#556FB5">
                <td><div class="axisLabel">收缩压</div></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><div class="levelstatus">高血压3级</div></td>
            </tr>
            <tr style="background:#6C88D3">
                <td><div class="leveldata">180</div></td>
                <td></td>
                <td></td>
                <td></td>
                <td><div class="levelstatus">高血压2级</div></td>
                <td style="background:#556FB5"></td>
            </tr>
            <tr style="background:#89A3E8">
                <td><div class="leveldata">160</div></td>
                <td></td>
                <td></td>
                <td><div class="levelstatus">高血压1级</div></td>
                <td style="background:#6C88D3"></td>
                <td style="background:#556FB5"></td>
            </tr>
            <tr style="background:#ADC1F6">
                <td><div class="leveldata">140</div></td>
                <td></td>
                <td><div class="levelstatus">正常血压高值</div></td>
                <td style="background:#89A3E8"></td>
                <td style="background:#6C88D3"></td>
                <td style="background:#556FB5"></td>
            </tr>
            <tr style="background:#CEDBFF">
                <td><div class="leveldata">130</div></td>
                <td><div class="levelstatus">正常血压</div></td>
                <td style="background:#ADC1F6"></td>
                <td style="background:#89A3E8"></td>
                <td style="background:#6C88D3"></td>
                <td style="background:#556FB5"></td>
            </tr>
            <tr style="background:#CEDBFF">
                <td></td>
                <td></td>
                <td style="background:#ADC1F6"><div class="leveldata">80</div></td>
                <td style="background:#89A3E8"><div class="leveldata">90</div></td>
                <td style="background:#6C88D3"><div class="leveldata">100</div></td>
                <td style="background:#556FB5;display:flex;flex-direction:row"><div class="leveldata">110</div><div class="axisLabel">收缩压</div></td>
            </tr>
        </table>
    </div>
</template>
<style>
.bloodLevel{
    border-collapse: collapse;
}
.leveldata{
    font-size:8px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(231,238,255,1);
line-height:10px;
text-shadow: 1px 1px 1px grey;
margin-right:1px;
}
.levelstatus{
background:rgba(255,255,255,1);
border:2px solid rgba(255,255,255,1);
border-radius:8px;
font-size:8px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(85,111,181,1);
line-height:10px;
}
.axisLabel{
    color: white;
    font-size: 8px;
}
</style>