var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array(
            "阿利斯塔 ---- 俺很生气，后果很严重！",
            "殇之木乃伊 ---- 我还以为你从来都不会选我呢。",
            "古拉加斯 ---- 唔，你买单，我就来！",
            "时间刺客 ---- 时间 不在于你拥有多少 而在于你 怎样使用",
            "阿兹尔 ---- 恕瑞玛，你的皇帝回来了",
            "疾风剑豪 ---- 长路漫漫，唯剑作伴",
            "魂锁典狱长 ---- 我们要怎样进行这令人愉悦的折磨",
            "傲之追猎者 ---- 今晚 猎个痛快！",
            "荣耀行刑官 ---- 欢迎来到 德莱联盟！",
            "诺克萨斯之手 ---- 只有我才能带领我们走向胜利",
            "爆破鬼才 ---- 来 战个痛快",
            "机械先驱 ---- 加入光荣的进化吧！",
            "九尾妖狐 ---- 我们心有灵犀 不是么？",
            "法外狂徒 ---- 我与死亡同行",
            "远古巫灵 ---- 我来让你见识一下真正的魔法吧 召唤师",
            "放逐之刃 ---- 断剑重铸之日，骑士归来之时",
            "刀锋之影 ---- 刀下生 刀下死",
            "暗夜猎手 ---- 让我们来猎杀那些陷入黑暗中的人吧",
            "琴瑟仙女 ---- 只有你才能听到我的声音   召唤师 今天我们演奏哪一首曲子？",
            "诡术妖姬 ---- 黑玫瑰将再次绽放",
            "刀锋意志 ---- 我的剑愿为你效劳",
            "皮城女警 ---- 好戏开场了",
            "荒漠屠夫 ---- 所有人，都得死",
            "盲僧 ---- 我用双手成就你的梦想",
            "德玛西亚皇子 ---- 犯我德邦者 虽远必诛",
            "赏金猎人 ---- 好运 不会眷顾傻瓜",
            "猩红收割者 ---- 血流成河",
            "德邦总管 ---- 长枪已在",
            "不祥之刃 ---- 我已经做出了我的选择",
            "邪恶小法师 ---- 如果我俩角色互换 我会让知道什么叫残忍",
            "蛮族之王 ---- 我的大刀早已饥渴难耐了",
            "探险家 ---- 是时候表演真正的技术了",
            "德玛西亚之力 ---- 人在塔在",
            "死亡颂唱者 ---- 极悲 极乐 平和 每一个必经阶段都有其美妙之处",
            "卡牌大师 ---- 胜利女神在微笑",
            "暴风之怒 ---- 风之化身 听候您的差遣",
            "迅捷斥候 ---- 提莫队长正在待命",
            "寒冰射手 ---- 世间万物皆系于一箭之上",
            "麦林炮手 ---- 一日为班德尔炮手 终生为班德尔炮手！",
            "战争女神 ---- 我总能拿到买路钱，要么拿钱，要么拿命"
        );
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandom(255,0)},${getRandom(255,0)},${getRandom(255,0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $i.remove();
            });
    });
});