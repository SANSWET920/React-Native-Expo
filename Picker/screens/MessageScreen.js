import {AdMobBanner,AdMobInterstitial,PublisherBanner,AdMobRewarded} from 'react-native-admob';
class Alpha extends React.Component {
    componentWillMount(){
        this.makeAdmobRequest();
        setTimeout(()=>{
            this.makeRemoteRequest()
        },1000);
        setTimeout(()=>{
            this.showInterstitial()
        },60000);
    }  
    makeAdmobRequest=()=>{
        return  fetch('http://url/admob_setting.php?cat_id=2')
        .then((response) => response.json())
        .then((responseJson) =>
        {
            var bannerid1=responseJson[0]['banner_add'];
            this.setState({
                bannerid1:responseJson[0]['banner_add'],
                interestitialid:responseJson[0]['interestial_add'],
            });
        })
        .catch((error) =>
        {
            console.error(error);
        });
    }

    renderAdd(){
        if(this.state.bannerid1){
            return(
                <View style={{flex:1}}>
                    <AdMobBanner
                    adSize="banner"
                    adUnitID={this.state.bannerid1}
                    testDeviceID="EMULATOR"
                    didFailToReceiveAdWithError={this.bannerError} />
                </View>
            );
        }
    }

    showInterstitial() {
        AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
        AdMobInterstitial.setAdUnitID(this.state.interestitialid);
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    }
    render() {
    
    }
}