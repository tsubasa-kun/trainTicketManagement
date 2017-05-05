/**
 * Created by xiekun on 2017/4/12 0012.
 */
global.HOST = 'http://amptest.wisedu.com/axsfw';
// global.HOST = '';
export default {
    GET_ZD_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/getZDInfo.do',//字典接口
    GET_STUDENT_APPLY_LOG: global.HOST + '/sys/knsapp/MobilePoorStuApply/getStuApplyLogInfo.do',//获取申请记录的审核日志
    GET_POOR_SET_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/getPoorSetInfo.do',//获取困难生申请设置信息
    GET_POOR_PASS_COUNT: global.HOST + '/sys/knsapp/MobilePoorStuApply/getPoorPassCount.do',//获取设置学年已成功申请记录数
    GET_STUDENT_FAMILY_MEMBER: global.HOST + '/sys/knsapp/MobilePoorStuApply/getStuFamMemberInfo.do',//查询学生家庭成员
    ADD_STUDENT_FAMILY_MEMBER: global.HOST + '/sys/knsapp/MobilePoorStuApply/newStuFamMemberInfo.do',//新增学生家庭成员
    MODIFY_STUDENT_FAMILY_MEMBER: global.HOST + '/sys/knsapp/MobilePoorStuApply/modifyStuFamMemberInfo.do',//修改学生家庭成员
    DELETE_STUDENT_FAMILY_MEMBER: global.HOST + '/sys/knsapp/MobilePoorStuApply/deleteStuFamMemberInfo.do',//删除学生家庭成员
    GET_STUDENT_FAMILY_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/getStuFamliyInfo.do',//查询家庭情况
    GET_STUDENT_AWARD_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/getStuAwardInfo.do',//已获资助情况
    GET_FAMILY_CONCAT_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/getStuFamConcatInfo.do',//查询家庭联系信息
    MODIFY_FAMILY_CONCAT_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/modifyStuFamConcatInfo.do',//修改家庭联系信息
    GET_CIVILIAN_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/getStuCivilianInfo.do',//查询学生民政信息
    SAVE_CIVILIAN_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/saveStuCivilianInfo.do',//保存学生民政信息
    SAVE_STUDENT_APPLY_INFO: global.HOST + '/sys/knsapp/MobilePoorStuApply/saveStudentApplyInfo.do'//提交学生申请信息
}
