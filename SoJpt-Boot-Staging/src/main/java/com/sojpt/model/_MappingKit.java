package com.sojpt.model;

import com.jfinal.plugin.activerecord.ActiveRecordPlugin;

/**
 * Generated by JFinal, do not modify this file.
 * <pre>
 * Example:
 * public void configPlugin(Plugins me) {
 *     ActiveRecordPlugin arp = new ActiveRecordPlugin(...);
 *     _MappingKit.mapping(arp);
 *     me.add(arp);
 * }
 * </pre>
 */
public class _MappingKit {
	
	public static void mapping(ActiveRecordPlugin arp) {
		arp.addMapping("Intellectualization", "id", Intellectualization.class);
		arp.addMapping("Supply_chainfinance", "id", SupplyChainfinance.class);
		arp.addMapping("big_data", "id", BigData.class);
		arp.addMapping("business", "id", Business.class);
		arp.addMapping("businessById", "id", BusinessById.class);
		arp.addMapping("contact", "id", Contact.class);
		arp.addMapping("dic_log", "ID", DicLog.class);
		arp.addMapping("dic_popedom", "ID", DicPopedom.class);
		arp.addMapping("dic_role", "ID", DicRole.class);
		arp.addMapping("dic_role_popedom", "ID", DicRolePopedom.class);
		arp.addMapping("dic_student", "id", DicStudent.class);
		arp.addMapping("dic_user", "ID", DicUser.class);
		arp.addMapping("dic_user_role", "ID", DicUserRole.class);
		arp.addMapping("employment", "id", Employment.class);
		arp.addMapping("environment_protection", "id", EnvironmentProtection.class);
		arp.addMapping("icons", "id", Icons.class);
		arp.addMapping("intellect_case", "id", IntellectCase.class);
		arp.addMapping("merchandise_new", "id", MerchandiseNew.class);
		arp.addMapping("merchandise_type", "id", MerchandiseType.class);
		arp.addMapping("newkinds", "id", Newkinds.class);
		arp.addMapping("news", "id", News.class);
		arp.addMapping("newsindex", "id", Newsindex.class);
		arp.addMapping("order", "id", Order.class);
		arp.addMapping("partbanner", "id", Partbanner.class);
		arp.addMapping("partnerkinds", "id", Partnerkinds.class);
		arp.addMapping("partners", "id", Partners.class);
		arp.addMapping("partners_index", "id", PartnersIndex.class);
		arp.addMapping("project_cases", "id", ProjectCases.class);
		arp.addMapping("promotion", "id", Promotion.class);
		arp.addMapping("quality", "id", Quality.class);
		arp.addMapping("ringcase", "id", Ringcase.class);
		arp.addMapping("shangping", "id", Shangping.class);
		arp.addMapping("slideshow", "id", Slideshow.class);
		arp.addMapping("succeed", "id", Succeed.class);
		arp.addMapping("supply_chain", "id", SupplyChain.class);
	}
}
