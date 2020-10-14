package com.sojpt.boot.controller.admin.validator;

import com.jfinal.core.Controller;
import com.jfinal.validate.Validator;
import com.sojpt.model.DicUser;

public class UserUpdateValidator extends Validator {

    @Override
    protected void validate(Controller c) {
        
        DicUser dicUser = c.getModel(DicUser.class, "user");
        
        if(dicUser.get("USER_CODE") != null)
            validateString("user.USER_CODE", 0, 50, "msg", "登录名称 最多50个字符");
        validateRequired("user.USER_CODE", "msg", "请输入登录名称");
        if(dicUser.get("USER_NAME") != null)
            validateString("user.USER_NAME", 0, 50, "msg", "显示名 最多50个字符");
        validateRequired("user.USER_NAME", "msg", "请输入显示名");
        
    }

    @Override
    protected void handleError(Controller c) {
        c.renderJson();
    }

}