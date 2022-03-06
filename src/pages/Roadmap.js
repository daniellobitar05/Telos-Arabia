import {useState} from "react";
import styled from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import Footer from "../components/Sections/Footer";
import Picture from "../components/images/news/news2.jpg";

const Section = styled.div`
    width: 100%;
    height: 2000vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 2490vh;
    }
`; 

const PageTitle = styled.div`
    font-size: 84px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    @media screen and (max-width: 768px){
        font-size: 42px;

    }
    
`;

const DownTitle = styled.div`
    font-size: 72px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    padding: 80px 0;
    @media screen and (max-width: 768px){
        font-size: 42px;

    }
    
`;

const ImageHolder = styled.div`
    width: 50%;
    height: 60vh;
    background: red;
    display: flex;
    background-image: url(${Picture});
    background-size: cover;
    
    @media screen and (max-width: 768px){
        width: 90%;
        height: 30vh;
    }
`;

const Title = styled.div`
    height: 30vh;
    width: 80%;
    font-size: 48px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    transform: translate(0, 20%);
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        transform: translate(0, 0);
    }
`;

const Bigtitle = styled.div`
    height: 40vh;
    width: 80%;
    font-size: 62px;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const Article = styled.div`
    width: 70vw;
    font-size: 32px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    padding: 30px 0;
    span{
        margin: 0 10px;
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
    }
`;

const Roadmap = () => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
                <Section id="roadmap">
                    <PageTitle>الاعلان عن خارطة تيلوس الجديدة</PageTitle>
                    <ImageHolder></ImageHolder>
                    <Title> المستقبل يبحث عن ملحمة تيلوس</Title>
                    <Article>مرحبًا بك في خارطة طريق تيلوس الجديدة للسنوات القادمة! كان بعض قرائنا من محبي تيلوس منذ أن تم إطلاق الشبكة الرئيسية قبل ثلاث سنوات قصيرة. يتعلم الآخرون الآن للتو عن حالات الاستخدام المذهلة في العالم الحقيقي وإمكانيات تيلوس. أينما كنت في رحلة تيلوس الخاصة بك ، نعلم أنك ستحب القراءة حول خريطة الطريق الجديدة الخاصة بنا.</Article>
                    <Article>خارطة الطريق هذه هي رؤيتنا التوجيهية لمستقبل تيلوس. أثناء القراءة ، تذكر أنه كان هناك الكثير من عمليات إعادة الهيكلة الرائعة خلف الكواليس. نحن متحمسون لكل ما يحمله المستقبل لشركة تيلوس!</Article>
                    <Article><p><t>قد يتم طرح الأسئلة عليك بعد قراءة خارطة الطريق الخاصة بنا. انضم إلى تيلوس تيوزداي مع الفريق الأساسي في</t><a href="https://youtu.be/mLhbdy6CqYM" target="_blank" rel="noreferrer">11 كانون الثاني (يناير) 2022</a>، ومن ذلك الحين فصاعدًا ، سنقوم بإعادة التحديثات التقنية مرتين في الشهر حتى تتمكن من البقاء على اطلاع دائم بكل هذه المبادرات الرائعة.</p></Article>
                    <Article>شيء أخير قبل أن نتعمق في خريطة الطريق! المقطع الحالي هو ملخصنا لما نعمل عليه الآن. قسم المستقبل هو ملخصنا لكل شيء نعمل على تحقيقه من أجل مستقبل نظام تيلوس البيئي. ترقبوا هذه التحديثات الأسبوعية لمعرفة ما سنقوم بمعالجته بعد ذلك والحصول على آخر التطورات التقنية في تيلوس</Article>
                    <Article>دعونا نتعمق في خارطة طريق تيلوس الجديدة! اربط حزام الأمان ، إنها رحلة رائعة</Article>
                    <Bigtitle>الحاضر</Bigtitle>
                    <Article style={{direction: 'rtl'}}>يستمر عمل Telos Core Team حتى بعد منتج مذهل مثل إطلاق Telos EVM. تحقق من المنتجات والمبادرات التي يتم تنفيذها حاليًا داخل نظام Telos البيئي. العديد من هذه الميزات موجودة بالفعل لاستخدامك ، مع قيام الفريق بإضافة ميزات جديدة على أساس منتظم.</Article>
                    <Title>Telos EVM</Title>
                    <Article style={{direction: 'rtl'}}>كان إطلاق Telos EVM أحد أهم الإنجازات لنظام Telos البيئي منذ إطلاق شبكته الرئيسية. أطلقت Telos جهازًا ظاهريًا من الطبقة الأولى من Ethereum بدون تشغيل أمامي ، ورسوم الغاز المسطحة ، وكفاءة الطاقة ، والسرعة القصوى والقوة! مع بدء نشر التطبيقات ، يستمر التطوير في ضمان الإعداد السلس مع تكافؤ الميزات.</Article>
                    <Article><p><a href="http://teloscan.io/" target="_blank" rel="noreferrer">في وثائقنا هنا<span>Telos EVM</span></a><t>يمكنك قراءة المزيد عن</t></p></Article>
                    <Title><t><span>Voter Mobile</span>تحديد تطبيق</t></Title>
                    <Article style={{direction: 'rtl'}}><p><t>يتيح تطبيق</t><span>Decide Voter</span><t>للجوال من</t><span>GoodBlock Technologies</span><t>استخدام محرك</t><span>Telos Decide</span><t> في العالم الحقيقي. متوفر على</t><a href="https://play.google.com/store/apps/details?id=com.decidevoter" target="_blank" rel="noreferrer"> Google Play</a><t> و </t><a href="https://play.google.com/store/apps/details?id=com.decidevoter" target="_blank" rel="noreferrer">Apple Store</a><t> ، هذا التطبيق البديهي يجعل الإدارة اللامركزية الشفافة والفعالة في متناول الجميع</t></p></Article>
                    <Title>dStor</Title>
                    <Article style={{direction: 'rtl'}}>dStor هي خدمة تخزين بيانات لامركزية تتمتع بمستويات عالية من المرونة والأمان يتم تطويرها حاليًا بواسطة GoodBlock Technologies. كأحد أعمدة الويب 3.0 ، يبسط dStor استخدام التخزين السحابي اللامركزي من خلال السماح للمدفوعات الورقية وإدارة البيانات عبر الشبكة لزيادة السرعة والتكرار دون الحاجة إلى إدارة العملاء ، كما تفعل منصات التخزين اللامركزية الأخرى. بفضل قدرة dStor على إيجاد عقد تخزين عالية الجودة داخل المنطقة الجغرافية للمستخدم ، تكون السرعة بنفس سرعة المنصات المركزية. يتيح ذلك فرصًا رائدة لصناعة التشفير بما في ذلك الألعاب اللامركزية القابلة للتطوير ، وأصول NFT الآمنة ، ووثائق الحوكمة غير القابلة للتلاعب ، والمزيد.</Article>
                    <Title>Telos Web Wallet 2.0</Title>
                    <Article style={{direction: 'rtl'}}><p><t>قدم إصدار</t><a href="http://wallet.telos.net/" target="_blank" rel="noreferrer">Telos Web Wallet 2.0</a><t>واجهة سهلة للتنقل للمستخدمين لإدارة أصول التشفير المستندة إلى</t><span>Telos</span><t>في تطبيق حدسي. سيوفر التطوير المستمر مزيدًا من الوظائف وسهولة الاستخدام لحل محفظة الويب متعدد الإمكانات</t></p></Article>
                    <Title > بيتا Teloscan</Title>
                    <Article style={{direction: 'rtl'}}><p><t>تم تصميم إصدار</t><span>Telos</span><t> من مستكشف كتل</t><span>Ethereum</span><t>الشهير خصيصًا مع وضع</t><span>Telos EVM</span><t>في الاعتبار. على الرغم من أن التطوير لا يزال في مراحله الأولى ، يمكن للمستخدمين و</t><span>dApps</span><t>بالفعل البدء في استكشاف </t><a href="http://teloscan.io/" target="_blank" rel="noreferrer">Telos EVM</a><t> من خلال التكرار المبكر لهذه الأداة القوية</t></p></Article>
                    <Title>Telos قاعدة المعرفة والدعم  </Title>
                    <Article style={{direction: 'rtl'}}><p><t>تعد</t><a href="http://wallet.telos.net/" target="_blank" rel="noreferrer">Telos Knowledge Base</a><t>، موطن دعم</t><span>Telos</span><t>لرسمي ، جزءًا لا يتجزأ من إنشاء</t><span>blockchain</span><t>للتبني الجماعي. من السهل التنقل في وثائق الدعم ويزيل نظام التذاكر المألوف عامل التخويف الذي يربطه العديد من الأشخاص بتقنية التشفير والويب 3.0</t></p></Article>
                    <Title>الشراكات والتبادلات</Title>
                    <Article>يتمثل مفتاح النظام البيئي المزدهر في أكثر من مجرد التكنولوجيا التي يتم تقديمها. هذا هو السبب في أن مؤسسة Telos تبني شراكات مع مشاريع صناعية بارزة والتبادلات في جميع أنحاء العالم</Article>
                    <Bigtitle>مستقبل</Bigtitle>
                    <Article style={{direction: 'rtl'}}>تمهد Telos الطريق للتبني الجماعي للويب 3.0 من خلال تطوير حلول لامركزية مبتكرة مع تطبيقات العالم الحقيقي. سيحدد مطورو Telos الأساسيون وفريق المنتج أولويات التطوير على أساس ربع سنوي مع مراعاة الاحتياجات والفرص والموارد المتاحة. هذا ما لدينا في متجر Telos في عام 2022 وما بعده!</Article>
                    <Title>أكاديمية تيلوس</Title>
                    <Article style={{direction: 'rtl'}}>تعرف على كل شيء عن Telos! نظرًا لأن الصناعة تتجه نحو التبني الجماعي ، نريد أن نجعل من السهل قدر الإمكان الترحيب بمشاريع العالم الحقيقي والمستخدمين والمستثمرين في النظام البيئي. سيجد المستخدمون في Telos Academy مواد تعليمية حول الجوانب الرئيسية لـ Telos ، إلى جانب مقدمة أوسع لتقنية blockchain.</Article>
                    <Title>Telos EVM 2.0</Title>
                    <Article style={{direction: 'rtl'}}>تسبق Telos EVM بالفعل بأميال حلول Solidity المنافسة الحالية ، لكن التطوير لا يتباطأ. سيضمن Telos EVM 2.0 استمرار Telos في تقديم قوة لا مثيل لها للتطبيقات المستندة إلى Ethereum على مدى عقود.</Article>
                    <Title>T-3.0 مقايضة</Title>
                    <Article style={{direction: 'rtl'}}>سيضمن التطوير المستمر لبورصة T-Swaps أن تظل هذه المنصة جزءًا أساسيًا من DeFi على Telos. تعد واجهة المستخدم الأنيقة ، وتجمعات السيولة المخصصة للمناطق ، والسيولة المتزايدة ، وغيرها من الميزات الجديدة عناصر أساسية في خريطة الطريق لمنصة التداول المبتكرة هذه.</Article>
                    <Title> Telos dApp برنامج حوافز</Title>
                    <Article style={{direction: 'rtl'}}>من أجل ضمان أن Telos هي موطن لبعض الاقتصادات الأكثر ابتكارًا وازدهارًا في الصناعة ، فإننا نطلق برنامج حوافز dApp لشبكة Telos. ستقدم هذه المبادرة الدعم المالي والتقني وتطوير الأعمال للمشاريع التي ستلعب دورًا أساسيًا في مستقبل صناعة blockchain.</Article>
                    <Title>Telos SureProfit</Title>
                    <Article style={{direction: 'rtl'}}>تم إعداد هذه الأداة الرائدة لإحداث ثورة في DeFi ، وتمكين المتداولين من ضمان نجاح تداولاتهم قبل إجراء المعاملات. سيسمح SureProfit للمستخدمين بالتحقق من أرصدتهم قبل إنهاء المعاملة مباشرة وإلغاء أي معاملة قد تؤدي إلى خسارة صافية للمستخدم النهائي. عند إقرانها بمعاملات شبه محسوسة ، تتيح هذه الأداة القوية البدء في تكوين ثروة بأقل من دولار واحد.</Article>
                    <Title>  (SAT) رموز ساتوشي</Title>
                    <Article style={{direction: 'rtl'}}>نسخة مجزأة من Bitcoin بديهية للغاية يمكن لجدتك استخدامها! لماذا تشتري قهوة مقابل 0.00005441 بيتكوين بينما يمكنك شرائها مقابل 5441 SAT؟ تسمح SATs بعلامات الأسعار التي تكون منطقية فعلاً للشخص العادي. عند إقرانها بمعاملات شبه محسوسة عند 10000 TPS وواجهة مستخدم سهلة الاستخدام لمحفظة Telos Web Wallet ، لم تكن معاملات التشفير في العالم الحقيقي أسهل من أي وقت مضى. يتم ربط SATs بـ Bitcoin blockchain وتمثل الرموز المميزة لـ BTC المغلفة. يمكن أيضًا تحويلها مباشرة بين SAT و BTC دون استخدام عقد تبادل أو مقايضة.</Article>
                    <Title> T-Bond NFTs واجهة مستخدم</Title>
                    <Article style={{direction: 'rtl'}}>كانت تقنية T-Bond NFTs واحدة من أكثر تطورات DeFi ابتكارًا في عام 2021. ستفتح T-Bonds UI الجديدة هذه القطعة القوية من الأدوات لمبادرات العالم الحقيقي بدون موارد للمطورين. نظرًا لأن العالم يعيد تصور الشكل الذي تبدو عليه أنظمتنا المالية التقليدية ، فإن T-Bond NFTs من المقرر أن تلعب دورًا رئيسيًا في مستقبل اقتصاداتنا.</Article>
                    <Title>Teloscan & Telos Block Explorer</Title>
                    <Article style={{direction: 'rtl'}}>مع استمرار تطوير Telos EVM ، ستقدم Teloscan التطبيقات والمستخدمين مجموعة من الأدوات التي تتنافس مع مستكشفي الكتل الرائدين الآخرين. بالإضافة إلى Teloscan for Telos EVM ، يجري أيضًا تطوير مستكشف كتل رسمي لـ Telos الأصلي. ستعمل كلتا هاتين الأداتين على تعظيم الاستفادة من ميزات Telos المتنوعة وضمان تجربة مستخدم سلسة للتنقل في تاريخ نظام Telos البيئي على نطاق واسع.</Article>
                    <Title>T-ID</Title>
                    <Article style={{direction: 'rtl'}}>حل هوية يجمع بين حاجتين كبيرتين للهوية. الأول هو الحاجة إلى تحديد الطابع الفريد لهوية الحساب الفردي ، والثاني هو قدرة المستخدم على التحقق من المعلومات من قبل أطراف ثالثة دون تسريب المعلومات الخاصة. سيتمكن المستخدمون من مشاركة معلومات محددة مع التطبيقات مع الحفاظ على التحكم فيما يشاركونه. سيتم ربط الشهادات الصادرة بهذه التفاصيل. سيكون هذا المنتج حاسمًا مع تطور الصناعة وتصبح احتياجات الحوكمة و DeFi أكثر تعقيدًا. أبرم مطورو Telos Core شراكة مع المطورين الأصليين لنظام الهوية الوطنية الإستونية ، وهو أول وأنجح نظام هوية blockchain في العالم.</Article>
                    <Title><t>جدارية</t><t>NFT</t><t>سوق ومعرض</t></Title>
                    <Article style={{direction: 'rtl'}}>مع تكاليف سكك منخفضة للغاية ، وعدم وجود مقدمة ، وبصمة كربونية منخفضة ، تم تعيين Telos EVM ليكون النظام الأساسي الأكثر ملاءمة للفنان في جميع أنحاء الصناعة. يعد سوق ومعرض NFT الجداري جزءًا أساسيًا في تسهيل هذا النظام البيئي الإبداعي المزدهر. قم بشراء وبيع وتداول وعرض مجموعات NFT الخاصة بك بسهولة وتنمية محفظة الأعمال الفنية اللامركزية الخاصة بك.</Article>
                    <Title>Telos خاص</Title>
                    <Article style={{direction: 'rtl'}}>ستعمل Telos Private على تمكين معاملات "ZK) الخاصة تمامًا" لإثبات المعرفة الصفرية "لمستخدمي Telos. ستستخدم Telos Private سلسلة جانبية منفصلة برمز معدل للسماح بمعاملات ZK والجسور من وإلى Telos. ستكون السلسلة الجانبية لامركزية ويديرها منتجو كتلة Telos ، ويتم اختيارهم من خلال تصويت المستخدم.</Article>
                    <Title> + تحديد المصوت</Title>
                    <Article style={{direction: 'rtl'}}>تعد الحوكمة القوية أحد أعمدة نظام Telos البيئي ، ولكن تتوفر حاليًا ميزات حوكمة معينة فقط للمستخدمين الذين ليس لديهم موارد للمطورين. يحل Decide Voter + هذا من خلال توفير حوكمة blockchain المتقدمة لمشاريع العالم الحقيقي. يتضمن ذلك ميزات مثل تعديلات التشريعات وإدارة انتخابات مجلس الإدارة والمزيد.</Article>
                    <Title> Telos 2.0 ملفات تعريف </Title>
                    <Article style={{direction: 'rtl'}}><p><t><a href="https://app.telos.net/profiles/myProfile/" target="_blank" rel="noreferrer"> ملفات تعريف Telos </a>,</t><t>جواز سفرك إلى الويب 3.0 ، عبارة عن خدمة ملف تعريف مستخدم لامركزية تم إنشاؤها لتسهيل نظام بيئي أكثر جاذبية. يسمح للمستخدمين بتعيين صورة رمزية مخصصة وشخصية عامة مرتبطة بحساباتهم. يمكن للمشاريع بعد ذلك الاستفادة من هذا كحل ملف تعريف على مستوى الشبكة للتجارب المألوفة داخل التطبيق. سوف توفر Telos Profiles 2.0 واجهة مستخدم محدثة وأدوات سهلة للتنقل ، مما يفتح الإمكانات الكاملة لتنميط المستخدم اللامركزي.</t></p></Article>
                    <Title>Telos موقع</Title>
                    <Article style={{direction: 'rtl'}}>يسمح موقع Telos بإثبات الموقع باستخدام blockchain Telos ، مع تحفيز المستخدمين على إجراء "التنقيب عن الموقع" للنظام. باستخدام هذا المنتج ، سيتمكن أي شخص من التحقق من وجوده في موقع معين في وقت محدد. هذا يفتح عالمًا من الاحتمالات لـ dApps و DAOs والمبادرات اللامركزية الأخرى. لاحظ أن موقع Telos هو هدف إنمائي طويل المدى ولا يُتوقع أن يكتمل خلال عام 2022.</Article>
                    <DownTitle style={{direction: 'rtl'}}>نأمل أن تكون قد استمتعت بخريطة طريق Telos الجديدة!</DownTitle>
                    <Article style={{direction: 'rtl'}}>هل أذهلك كل العمل المذهل والمشاريع الرائدة القادمة إلى Telos خلال العام المقبل؟ هناك الكثير من الأشياء التي تجعلك متحمسًا لعشاق NFT ومعالجات DeFi وعشاق اللامركزية.</Article>
                    <Article style={{direction: 'rtl'}}><p><t>تذكر أنه يمكنك ضبط</t><t><a href="http://wallet.telos.net/" target="_blank" rel="noreferrer"><t>Telos Tuesday AMA</t><t>مع الفريق الأساسي في 11 يناير 2022</t></a></t><t>والحصول على إجابات لجميع أسئلتك. نحن نفخر بأنفسنا لكوننا شفافين وودودين مع مجتمعنا - ونأمل أن نراك هناك!</t></p></Article>
                    <Article style={{direction: 'rtl'}}>من ذلك الحين فصاعدًا ، سنعيد إليك التحديثات التقنية مرتين في الشهر حتى تتمكن من البقاء على اطلاع دائم بكل هذه المبادرات الرائعة. ترقبوا المزيد. وشكرًا لكونك أحد مؤسسي شركة Telos - نتمنى لك عامًا رائعًا!</Article>
                    <Title></Title>
                    
                </Section>
                <Footer />
        </ThemeProvider>
    )
}

export default Roadmap;