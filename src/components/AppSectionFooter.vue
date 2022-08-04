<template>
    <div class="footer">
        <div class="footer_contact">
            <h1 class="footer_name">Join our community</h1>
            <h4 class="footer_txt">and let's get baked</h4>
            <button class="send"><p>oven@180degrees.com</p></button>
        </div>
        <div class="footer_navi">
            <div class="tarla_logo">
                <img src="../assets/header/Logo.png" alt="" class="footer_logo">
            </div>
            <div class="account_item">
                <div class="account_txt">Account</div>
                <div class="account">
                    <ul>
                        <li>SIGN UP</li>
                        <li>LOG IN</li>
                    </ul>
                </div>
            </div>
            <div class="company_item">
                <div class="company_txt">Our company</div>
                <div class="company">
                    <ul>
                        <li>SHOP</li>
                        <li>OUR STORY</li>
                        <li>WHO is TARLA?</li>
                        
                    </ul>
                </div>
            </div>
            <div class="resoures_item">
                <div class="resourse_txt">Resources</div>
                <div class="resours">
                    <ul>
                        <a href="#"><li>FAQ</li></a>
                        <a href="#"><li>CONTACT</li></a>
                        <a href="#"><li>BECOME an INFLUENCER</li></a>
                        <a href="#"><li>PRIVACY POLICY</li></a>
                        <a href="#"><li>TERM of SERVICE</li></a>
                        <a href="#"><li>REFUND POLICY</li></a>
                    </ul>
                </div>
            </div>
            <div class="social_item">
                <div class="mesenger_txt">@tarlabakes</div>
                <div class="social_icons">
                    <img src="../assets/Footer/twit.png" alt="twiter" class="twiter">
                    <img src="../assets/Footer/face.png" alt="facebook" class="facebook">
                    <img src="../assets/Footer/inst.png" alt="instagram" class="instagram">
                    <img src="../assets/Footer/tic.png" alt="tic-toc" class="tictoc">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import "./reset.css"
    export default {
        name:'AppSectionFooter',
    }
</script>

<style lang="scss" scoped>

.footer_navi{
    padding-top: 80px;
    padding-bottom: 90px;
    display: flex;
    justify-content: space-around;
}

.footer_contact{
    text-align: center;
    
    .footer_name{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 72px;
        text-transform: uppercase;
    }
    
    .footer_txt{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 31px;
        line-height: 44px;
    }

    .send{
        cursor: pointer;
        margin-top: 20px;
        background: transparent;
        height: 58px;
        border-radius: 10px;
        width: 400px;
        p{
            align-items: center;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
        }
    }
}

.account_txt,
.company_txt,
.resourse_txt,
.mesenger_txt{
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 36px;
}

.account,
.company{
    position: relative;
    left: -25px;
    
    li{
        
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #121215;
    }
}

.resours{
    position: relative;
    left: 18px;
    li{
        
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #121215;
    }
}

li{
    cursor: pointer;
}



.social_icons{
    display: flex;
    .twiter,
    .facebook,
    .instagram,
    .tictoc{
        padding: 5px;
    }
}
</style>