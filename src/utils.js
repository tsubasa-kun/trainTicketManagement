/**
 * Created by jk on 2017/4/21 0021.
 */
import {Toast, MessageBox} from 'mint-ui';
export default {
    components: {
        [Toast.name]: Toast,
        [MessageBox.name]: MessageBox
    },
    methods: {
        showToast: function (msg) {
            Toast({
                message: msg,
                position: 'middle',
                duration: 2000
            });
        },
        showMessage: function (msg) {
            MessageBox.alert(msg, '提示');
        }
    }
}