package com.sojpt.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseDicLog<M extends BaseDicLog<M>> extends Model<M> implements IBean {

	public void setSessionId(java.lang.String sessionId) {
		set("SESSION_ID", sessionId);
	}
	
	public java.lang.String getSessionId() {
		return getStr("SESSION_ID");
	}

	public void setUserCode(java.lang.String userCode) {
		set("USER_CODE", userCode);
	}
	
	public java.lang.String getUserCode() {
		return getStr("USER_CODE");
	}

	public void setUserId(java.lang.String userId) {
		set("USER_ID", userId);
	}
	
	public java.lang.String getUserId() {
		return getStr("USER_ID");
	}

	public void setPopedomName(java.lang.String popedomName) {
		set("POPEDOM_NAME", popedomName);
	}
	
	public java.lang.String getPopedomName() {
		return getStr("POPEDOM_NAME");
	}

	public void setForwardAction(java.lang.String forwardAction) {
		set("FORWARD_ACTION", forwardAction);
	}
	
	public java.lang.String getForwardAction() {
		return getStr("FORWARD_ACTION");
	}

	public void setIp(java.lang.String ip) {
		set("IP", ip);
	}
	
	public java.lang.String getIp() {
		return getStr("IP");
	}

	public void setBrowser(java.lang.String browser) {
		set("BROWSER", browser);
	}
	
	public java.lang.String getBrowser() {
		return getStr("BROWSER");
	}

	public void setOs(java.lang.String os) {
		set("OS", os);
	}
	
	public java.lang.String getOs() {
		return getStr("OS");
	}

	public void setId(java.lang.String id) {
		set("ID", id);
	}
	
	public java.lang.String getId() {
		return getStr("ID");
	}

	public void setParas(java.lang.String paras) {
		set("PARAS", paras);
	}
	
	public java.lang.String getParas() {
		return getStr("PARAS");
	}

	public void setEntryTime(java.util.Date entryTime) {
		set("ENTRY_TIME", entryTime);
	}
	
	public java.util.Date getEntryTime() {
		return get("ENTRY_TIME");
	}

}
