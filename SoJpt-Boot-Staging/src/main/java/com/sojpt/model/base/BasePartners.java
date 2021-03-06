package com.sojpt.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BasePartners<M extends BasePartners<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Integer id) {
		set("id", id);
	}
	
	public java.lang.Integer getId() {
		return getInt("id");
	}

	public void setPname(java.lang.String pname) {
		set("pname", pname);
	}
	
	public java.lang.String getPname() {
		return getStr("pname");
	}

	public void setIntroduce(java.lang.String introduce) {
		set("introduce", introduce);
	}
	
	public java.lang.String getIntroduce() {
		return getStr("introduce");
	}

	public void setCover(java.lang.String cover) {
		set("cover", cover);
	}
	
	public java.lang.String getCover() {
		return getStr("cover");
	}

	public void setCreatedate(java.util.Date createdate) {
		set("createdate", createdate);
	}
	
	public java.util.Date getCreatedate() {
		return get("createdate");
	}

	public void setPkid(java.lang.Integer pkid) {
		set("pkid", pkid);
	}
	
	public java.lang.Integer getPkid() {
		return getInt("pkid");
	}

	public void setBanner(java.lang.String banner) {
		set("banner", banner);
	}
	
	public java.lang.String getBanner() {
		return getStr("banner");
	}

	public void setPictures(java.lang.String pictures) {
		set("pictures", pictures);
	}
	
	public java.lang.String getPictures() {
		return getStr("pictures");
	}

}
