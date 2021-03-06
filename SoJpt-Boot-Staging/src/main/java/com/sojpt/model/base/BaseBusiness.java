package com.sojpt.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseBusiness<M extends BaseBusiness<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Integer id) {
		set("id", id);
	}
	
	public java.lang.Integer getId() {
		return getInt("id");
	}

	public void setTitles(java.lang.String titles) {
		set("titles", titles);
	}
	
	public java.lang.String getTitles() {
		return getStr("titles");
	}

	public void setBusinessbytitle(java.lang.String businessbytitle) {
		set("businessBytitle", businessbytitle);
	}
	
	public java.lang.String getBusinessbytitle() {
		return getStr("businessBytitle");
	}

	public void setTitle(java.lang.String title) {
		set("title", title);
	}
	
	public java.lang.String getTitle() {
		return getStr("title");
	}

	public void setName(java.lang.String name) {
		set("name", name);
	}
	
	public java.lang.String getName() {
		return getStr("name");
	}

	public void setPicture(java.lang.String picture) {
		set("picture", picture);
	}
	
	public java.lang.String getPicture() {
		return getStr("picture");
	}

	public void setPictures(java.lang.String pictures) {
		set("pictures", pictures);
	}
	
	public java.lang.String getPictures() {
		return getStr("pictures");
	}

	public void setByidPictures(java.lang.String byidPictures) {
		set("byid_pictures", byidPictures);
	}
	
	public java.lang.String getByidPictures() {
		return getStr("byid_pictures");
	}

	public void setHref(java.lang.String href) {
		set("href", href);
	}
	
	public java.lang.String getHref() {
		return getStr("href");
	}

}
