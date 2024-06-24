window.Fish=window.Fish||{};
window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","BattleCaiShenFaFaFaSkinView":"resource/eui_fishSkins/BattleCaiShenFaFaFaSkin.exml","BattleFishArraySkinView":"resource/eui_fishSkins/BattleFishArraySkin.exml","BattleGuideSkinView":"resource/eui_fishSkins/BattleGuideSkin.exml","BattleInfoSkinView":"resource/eui_fishSkins/BattleInfoSkin.exml","BattlePlayerArraySkinView":"resource/eui_fishSkins/BattlePlayerArraySkin.exml","BattlePlayerLRPortSkinView":"resource/eui_fishSkins/BattlePlayerLRPortSkin.exml","BattlePlayerSkinView":"resource/eui_fishSkins/BattlePlayerSkin.exml","BattleSkinView":"resource/eui_fishSkins/BattleSkin.exml","BattleSpecialButtonSkinView":"resource/eui_fishSkins/BattleSpecialButtonSkin.exml","BattleWaveSkinView":"resource/eui_fishSkins/BattleWaveSkin.exml","BattleWheelOfFortuneSkinView":"resource/eui_fishSkins/BattleWheelOfFortuneSkin.exml","DebugListSkinView":"resource/eui_fishSkins/DebugListSkin.exml","DebugSkinView":"resource/eui_fishSkins/DebugSkin.exml","GuideBattleSkinView":"resource/eui_fishSkins/GuideBattleSkin.exml","HelpGameFeatureSkinView":"resource/eui_fishSkins/HelpGameFeatureSkin.exml","HelpPayTableSkinView":"resource/eui_fishSkins/HelpPayTableSkin.exml","HelpSkinView":"resource/eui_fishSkins/HelpSkin.exml","HelpUserInterfaceSkinView":"resource/eui_fishSkins/HelpUserInterfaceSkin.exml","HelpGameRuleSkinView":"resource/eui_fishSkins/HelpGameRuleSkin.exml","LoadingSkinView":"resource/eui_fishSkins/LoadingSkin.exml","LobbyAutoSkinView":"resource/eui_fishSkins/LobbyAutoSkin.exml","LobbyAutoZoneIRSkinView":"resource/eui_fishSkins/LobbyAutoZoneIRSkin.exml","LobbyInfoSkinView":"resource/eui_fishSkins/LobbyInfoSkin.exml","LobbySkinView":"resource/eui_fishSkins/LobbySkin.exml","OptionMenuBattleSkinView":"resource/eui_fishSkins/OptionMenuBattleSkin.exml","OptionMenuLobbySkinView":"resource/eui_fishSkins/OptionMenuLobbySkin.exml","OptionMenuSkinView":"resource/eui_fishSkins/OptionMenuSkin.exml","TransitionSkinView":"resource/eui_fishSkins/TransitionSkin.exml","BattleBroadcastView":"resource/eui_fishSkins/BattleBroadcastSkin.exml","EventBannerSkinView":"resource/eui_fishSkins/EventBannerSkin.exml"};generateEUI.paths['resource/eui_fishSkins/BattleBroadcastSkin.exml'] = window.Fish.BattleBroadcastSkin = (function (_super) {
	__extends(BattleBroadcastSkin, _super);
	function BattleBroadcastSkin() {
		_super.call(this);
		this.skinParts = ["lblContrat","userName","lblAt","roomName","lblWon","oddText","lblTimes","symbolImg","lblWon2","creditText","lblAward","lblJinTenHao"];
		
		this.height = 43;
		this.width = 960;
		this.elementsContent = [this._Group1_i(),this._Group2_i()];
		this.lblAward_i();
		
		this.states = [
			new eui.State ("none",
				[
					new eui.AddItems("lblAward","_Group2",2,"lblJinTenHao")
				])
			,
			new eui.State ("tw",
				[
					new eui.AddItems("lblAward","_Group2",2,"lblJinTenHao"),
					new eui.SetProperty("lblContrat","text","恭喜"),
					new eui.SetProperty("lblContrat","font","GP_Broadcast_Font_tw_fnt"),
					new eui.SetProperty("lblAt","text","在"),
					new eui.SetProperty("lblAt","font","GP_Broadcast_Font_tw_fnt"),
					new eui.SetProperty("roomName","text","財神廳"),
					new eui.SetProperty("roomName","font","GP_Broadcast_Font_tw_fnt"),
					new eui.SetProperty("lblWon","text","赢得"),
					new eui.SetProperty("lblWon","font","GP_Broadcast_Font_tw_fnt"),
					new eui.SetProperty("lblTimes","text","倍"),
					new eui.SetProperty("lblTimes","font","GP_Broadcast_Font_tw_fnt"),
					new eui.SetProperty("symbolImg","verticalCenter",0.5),
					new eui.SetProperty("symbolImg","source","GP_Broadcast_Symbol102_png"),
					new eui.SetProperty("lblWon2","text","獲得"),
					new eui.SetProperty("lblWon2","font","GP_Broadcast_Font_tw_fnt"),
					new eui.SetProperty("lblAward","font","GP_Broadcast_Font_tw_fnt"),
					new eui.SetProperty("lblAward","text","獎賞")
				])
			,
			new eui.State ("cn",
				[
					new eui.AddItems("lblAward","_Group2",2,"lblJinTenHao"),
					new eui.SetProperty("lblContrat","text","恭喜"),
					new eui.SetProperty("lblContrat","font","GP_Broadcast_Font_cn_fnt"),
					new eui.SetProperty("lblAt","text","在"),
					new eui.SetProperty("lblAt","font","GP_Broadcast_Font_cn_fnt"),
					new eui.SetProperty("roomName","text","财神厅"),
					new eui.SetProperty("roomName","font","GP_Broadcast_Font_cn_fnt"),
					new eui.SetProperty("lblWon","text","赢得"),
					new eui.SetProperty("lblWon","font","GP_Broadcast_Font_cn_fnt"),
					new eui.SetProperty("lblTimes","text","倍"),
					new eui.SetProperty("lblTimes","font","GP_Broadcast_Font_cn_fnt"),
					new eui.SetProperty("lblWon2","text","获得"),
					new eui.SetProperty("lblWon2","font","GP_Broadcast_Font_cn_fnt"),
					new eui.SetProperty("lblAward","font","GP_Broadcast_Font_cn_fnt")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("lblContrat","text","Congrats! Player "),
					new eui.SetProperty("lblContrat","font","GP_Broadcast_Font_en_fnt"),
					new eui.SetProperty("lblContrat","letterSpacing",-2),
					new eui.SetProperty("userName","x",201),
					new eui.SetProperty("userName","text","ABCD****"),
					new eui.SetProperty("userName","letterSpacing",-2),
					new eui.SetProperty("lblAt","text","rewards at"),
					new eui.SetProperty("lblAt","font","GP_Broadcast_Font_en_fnt"),
					new eui.SetProperty("lblAt","x",673),
					new eui.SetProperty("lblAt","letterSpacing",-2),
					new eui.SetProperty("roomName","text","CaiShen"),
					new eui.SetProperty("roomName","font","GP_Broadcast_Font_en_fnt"),
					new eui.SetProperty("roomName","x",800),
					new eui.SetProperty("roomName","letterSpacing",-2),
					new eui.SetProperty("lblWon","text","get"),
					new eui.SetProperty("lblWon","font","GP_Broadcast_Font_en_fnt"),
					new eui.SetProperty("lblWon","x",305),
					new eui.SetProperty("lblWon","letterSpacing",-2),
					new eui.SetProperty("oddText","x",349),
					new eui.SetProperty("oddText","text","1000"),
					new eui.SetProperty("oddText","letterSpacing",-2),
					new eui.SetProperty("lblTimes","text","X"),
					new eui.SetProperty("lblTimes","font","GP_Broadcast_Font_en_fnt"),
					new eui.SetProperty("lblTimes","x",391),
					new eui.SetProperty("symbolImg","verticalCenter",0.5),
					new eui.SetProperty("symbolImg","x",448),
					new eui.SetProperty("lblWon2","text","and win"),
					new eui.SetProperty("lblWon2","font","GP_Broadcast_Font_en_fnt"),
					new eui.SetProperty("lblWon2","x",484),
					new eui.SetProperty("lblWon2","letterSpacing",-2),
					new eui.SetProperty("creditText","x",578),
					new eui.SetProperty("creditText","text","1000000"),
					new eui.SetProperty("creditText","letterSpacing",-2),
					new eui.SetProperty("lblJinTenHao","text",".")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("lblContrat","text","Congrats! Player "),
					new eui.SetProperty("lblContrat","font","GP_Broadcast_Font_th_fnt"),
					new eui.SetProperty("lblContrat","letterSpacing",-2),
					new eui.SetProperty("userName","x",201),
					new eui.SetProperty("userName","text","ABCD****"),
					new eui.SetProperty("userName","letterSpacing",-2),
					new eui.SetProperty("lblAt","text","rewards at"),
					new eui.SetProperty("lblAt","font","GP_Broadcast_Font_th_fnt"),
					new eui.SetProperty("lblAt","x",673),
					new eui.SetProperty("lblAt","letterSpacing",-2),
					new eui.SetProperty("roomName","text","CaiShen"),
					new eui.SetProperty("roomName","font","GP_Broadcast_Font_th_fnt"),
					new eui.SetProperty("roomName","x",800),
					new eui.SetProperty("roomName","letterSpacing",-2),
					new eui.SetProperty("lblWon","text","get"),
					new eui.SetProperty("lblWon","font","GP_Broadcast_Font_th_fnt"),
					new eui.SetProperty("lblWon","x",305),
					new eui.SetProperty("lblWon","letterSpacing",-2),
					new eui.SetProperty("oddText","x",349),
					new eui.SetProperty("oddText","text","1000"),
					new eui.SetProperty("oddText","letterSpacing",-2),
					new eui.SetProperty("lblTimes","text","X"),
					new eui.SetProperty("lblTimes","font","GP_Broadcast_Font_th_fnt"),
					new eui.SetProperty("lblTimes","x",391),
					new eui.SetProperty("symbolImg","verticalCenter",0.5),
					new eui.SetProperty("symbolImg","x",448),
					new eui.SetProperty("lblWon2","text","and win"),
					new eui.SetProperty("lblWon2","font","GP_Broadcast_Font_th_fnt"),
					new eui.SetProperty("lblWon2","x",484),
					new eui.SetProperty("lblWon2","letterSpacing",-2),
					new eui.SetProperty("creditText","x",578),
					new eui.SetProperty("creditText","text","1000000"),
					new eui.SetProperty("creditText","letterSpacing",-2),
					new eui.SetProperty("lblJinTenHao","text",".")
				])
		];
	}
	var _proto = BattleBroadcastSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.alpha = 0.7;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "GP_Broadcast_Board_png";
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 434;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "GP_Broadcast_Board_png";
		t.width = 434;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.height = 21;
		t.horizontalCenter = 0;
		t.verticalCenter = -2;
		t.elementsContent = [this._Image3_i(),this.lblContrat_i(),this.userName_i(),this.lblAt_i(),this.roomName_i(),this.lblWon_i(),this.oddText_i(),this.lblTimes_i(),this.symbolImg_i(),this.lblWon2_i(),this.creditText_i(),this.lblJinTenHao_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "GP_Broadcast_Laba_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lblContrat_i = function () {
		var t = new eui.BitmapLabel();
		this.lblContrat = t;
		t.letterSpacing = -1;
		t.x = 42;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.BitmapLabel();
		this.userName = t;
		t.font = "GP_Broadcast_Font_en_fnt";
		t.letterSpacing = -1;
		t.text = "ABCD********";
		t.x = 87;
		return t;
	};
	_proto.lblAt_i = function () {
		var t = new eui.BitmapLabel();
		this.lblAt = t;
		t.x = 260;
		return t;
	};
	_proto.roomName_i = function () {
		var t = new eui.BitmapLabel();
		this.roomName = t;
		t.letterSpacing = -1;
		t.x = 292;
		return t;
	};
	_proto.lblWon_i = function () {
		var t = new eui.BitmapLabel();
		this.lblWon = t;
		t.letterSpacing = -1;
		t.x = 365;
		return t;
	};
	_proto.oddText_i = function () {
		var t = new eui.BitmapLabel();
		this.oddText = t;
		t.font = "GP_Broadcast_Font_en_fnt";
		t.letterSpacing = -1;
		t.text = "600";
		t.x = 417;
		return t;
	};
	_proto.lblTimes_i = function () {
		var t = new eui.BitmapLabel();
		this.lblTimes = t;
		t.x = 462;
		return t;
	};
	_proto.symbolImg_i = function () {
		var t = new eui.Image();
		this.symbolImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "GP_Broadcast_Symbol101_png";
		t.verticalCenter = 0;
		t.x = 519;
		return t;
	};
	_proto.lblWon2_i = function () {
		var t = new eui.BitmapLabel();
		this.lblWon2 = t;
		t.letterSpacing = -1;
		t.x = 555;
		return t;
	};
	_proto.creditText_i = function () {
		var t = new eui.BitmapLabel();
		this.creditText = t;
		t.font = "GP_Broadcast_Font_en_fnt";
		t.letterSpacing = -1;
		t.text = "30000000";
		t.x = 609;
		return t;
	};
	_proto.lblAward_i = function () {
		var t = new eui.BitmapLabel();
		this.lblAward = t;
		t.letterSpacing = -1;
		t.text = "奖赏";
		t.x = 707;
		t.y = 0;
		return t;
	};
	_proto.lblJinTenHao_i = function () {
		var t = new eui.BitmapLabel();
		this.lblJinTenHao = t;
		t.font = "GP_Broadcast_Font_en_fnt";
		t.letterSpacing = -1;
		t.text = "!!";
		t.x = 747;
		t.y = 0;
		return t;
	};
	return BattleBroadcastSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattleCaiShenFaFaFaSkin.exml'] = window.Fish.BattleCaiShenFaFaFaSkin = (function (_super) {
	__extends(BattleCaiShenFaFaFaSkin, _super);
	function BattleCaiShenFaFaFaSkin() {
		_super.call(this);
		this.skinParts = ["leftDoorGroup","rightDoorGroup","doorGroup","titleWordImage","titleLightWordImage","itemBGImage1","itemBGImage2","itemBGImage3","itemBGImage4","itemBGImage5","itemBGGroup","itemGroup","itemScore1","itemScore2","itemScore3","itemScore4","itemScore5","itemScoreGroup","selectWordImage","selectCountLabel","selectWordGroup","fxGroup","winBGCopyImage","winWordCopyImage","winCopyLabel","winCopyGroup","winBGImage","winWordImage","winLabel","winGroup","mainGroup"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.mainGroup_i()];
		this.states = [
			new eui.State ("none",
				[
					new eui.SetProperty("selectWordImage","verticalCenter",0)
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("titleWordImage","source","GP_LD_CaiShen_tw_png"),
					new eui.SetProperty("titleLightWordImage","source","GP_LD_CaiShen_FX_tw_png"),
					new eui.SetProperty("selectWordImage","verticalCenter",0),
					new eui.SetProperty("selectWordImage","source","GP_LD_PickMsg_tw_png"),
					new eui.SetProperty("winBGCopyImage","verticalCenter",0),
					new eui.SetProperty("winBGCopyImage","source","GP_LD_Win_Board_png"),
					new eui.SetProperty("winWordCopyImage","source","GP_LD_Win_Msg_tw_png"),
					new eui.SetProperty("winCopyGroup","percentWidth",100),
					new eui.SetProperty("winCopyGroup","percentHeight",100),
					new eui.SetProperty("winBGImage","verticalCenter",0),
					new eui.SetProperty("winBGImage","source","GP_LD_Win_Board_png"),
					new eui.SetProperty("winWordImage","source","GP_LD_Win_Msg_tw_png"),
					new eui.SetProperty("winGroup","percentWidth",100),
					new eui.SetProperty("winGroup","percentHeight",100)
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("titleWordImage","source","GP_LD_CaiShen_cn_png"),
					new eui.SetProperty("titleLightWordImage","source","GP_LD_CaiShen_FX_cn_png"),
					new eui.SetProperty("selectWordImage","verticalCenter",0),
					new eui.SetProperty("selectWordImage","source","GP_LD_PickMsg_cn_png"),
					new eui.SetProperty("winWordCopyImage","source","GP_LD_Win_Msg_cn_png"),
					new eui.SetProperty("winWordImage","source","GP_LD_Win_Msg_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("titleWordImage","source","GP_LD_CaiShen_en_png"),
					new eui.SetProperty("titleLightWordImage","source","GP_LD_CaiShen_FX_en_png"),
					new eui.SetProperty("selectWordImage","verticalCenter",0),
					new eui.SetProperty("selectWordImage","source","GP_LD_PickMsg_en_png"),
					new eui.SetProperty("selectCountLabel","horizontalCenter",-41),
					new eui.SetProperty("winWordCopyImage","source","GP_LD_Win_Msg_en_png"),
					new eui.SetProperty("winWordImage","source","GP_LD_Win_Msg_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("titleWordImage","source","GP_LD_CaiShen_th_png"),
					new eui.SetProperty("titleLightWordImage","source","GP_LD_CaiShen_FX_th_png"),
					new eui.SetProperty("itemScoreGroup","visible",true),
					new eui.SetProperty("selectWordImage","source","GP_LD_PickMsg_th_png"),
					new eui.SetProperty("selectWordImage","y",0),
					new eui.SetProperty("selectWordImage","horizontalCenter",2),
					new eui.SetProperty("selectCountLabel","horizontalCenter",-41),
					new eui.SetProperty("selectCountLabel","visible",false),
					new eui.SetProperty("selectWordGroup","visible",true),
					new eui.SetProperty("fxGroup","visible",true),
					new eui.SetProperty("winWordCopyImage","source","GP_LD_Win_Msg_th_png"),
					new eui.SetProperty("winWordCopyImage","verticalCenter",-30),
					new eui.SetProperty("winCopyGroup","visible",true),
					new eui.SetProperty("winWordImage","source","GP_LD_Win_Msg_th_png"),
					new eui.SetProperty("winWordImage","verticalCenter",-30),
					new eui.SetProperty("winGroup","visible",true)
				])
		];
	}
	var _proto = BattleCaiShenFaFaFaSkin.prototype;

	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.doorGroup_i(),this.titleWordImage_i(),this.titleLightWordImage_i(),this.itemBGGroup_i(),this.itemGroup_i(),this.itemScoreGroup_i(),this.selectWordGroup_i(),this.fxGroup_i(),this.winCopyGroup_i(),this.winGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.source = "GP_Mask_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.doorGroup_i = function () {
		var t = new eui.Group();
		this.doorGroup = t;
		t.horizontalCenter = 0;
		t.name = "doorGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.elementsContent = [this.leftDoorGroup_i(),this.rightDoorGroup_i()];
		return t;
	};
	_proto.leftDoorGroup_i = function () {
		var t = new eui.Group();
		this.leftDoorGroup = t;
		t.horizontalCenter = 0.5;
		t.name = "leftDoorGroup";
		t.scaleX = -1;
		t.verticalCenter = 0;
		return t;
	};
	_proto.rightDoorGroup_i = function () {
		var t = new eui.Group();
		this.rightDoorGroup = t;
		t.horizontalCenter = -0.5;
		t.name = "rightDoorGroup";
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleWordImage_i = function () {
		var t = new eui.Image();
		this.titleWordImage = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleLightWordImage_i = function () {
		var t = new eui.Image();
		this.titleLightWordImage = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.itemBGGroup_i = function () {
		var t = new eui.Group();
		this.itemBGGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.name = "itemBGGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.itemBGImage1_i(),this.itemBGImage2_i(),this.itemBGImage3_i(),this.itemBGImage4_i(),this.itemBGImage5_i()];
		return t;
	};
	_proto.itemBGImage1_i = function () {
		var t = new eui.Image();
		this.itemBGImage1 = t;
		t.name = "1";
		t.source = "GP_LD_RedEnvel_png";
		return t;
	};
	_proto.itemBGImage2_i = function () {
		var t = new eui.Image();
		this.itemBGImage2 = t;
		t.name = "2";
		t.source = "GP_LD_RedEnvel_png";
		return t;
	};
	_proto.itemBGImage3_i = function () {
		var t = new eui.Image();
		this.itemBGImage3 = t;
		t.name = "3";
		t.source = "GP_LD_RedEnvel_png";
		return t;
	};
	_proto.itemBGImage4_i = function () {
		var t = new eui.Image();
		this.itemBGImage4 = t;
		t.name = "4";
		t.source = "GP_LD_RedEnvel_png";
		return t;
	};
	_proto.itemBGImage5_i = function () {
		var t = new eui.Image();
		this.itemBGImage5 = t;
		t.name = "5";
		t.source = "GP_LD_RedEnvel_png";
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.name = "itemGroup";
		t.touchChildren = true;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.itemScoreGroup_i = function () {
		var t = new eui.Group();
		this.itemScoreGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.name = "itemScoreGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.itemScore1_i(),this.itemScore2_i(),this.itemScore3_i(),this.itemScore4_i(),this.itemScore5_i()];
		return t;
	};
	_proto.itemScore1_i = function () {
		var t = new eui.BitmapLabel();
		this.itemScore1 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 20;
		t.font = "GP_LD_RedEnvelope_Num1_fnt";
		t.height = 40;
		t.name = "1";
		t.text = "000000";
		t.textAlign = "center";
		t.width = 200;
		t.x = 403;
		t.y = 289.5;
		return t;
	};
	_proto.itemScore2_i = function () {
		var t = new eui.BitmapLabel();
		this.itemScore2 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 20;
		t.font = "GP_LD_RedEnvelope_Num1_fnt";
		t.height = 40;
		t.name = "2";
		t.text = "000000";
		t.textAlign = "center";
		t.width = 200;
		t.x = 575.5;
		t.y = 314;
		return t;
	};
	_proto.itemScore3_i = function () {
		var t = new eui.BitmapLabel();
		this.itemScore3 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 20;
		t.font = "GP_LD_RedEnvelope_Num1_fnt";
		t.height = 40;
		t.name = "3";
		t.text = "000000";
		t.textAlign = "center";
		t.width = 200;
		t.x = 329.5;
		t.y = 410;
		return t;
	};
	_proto.itemScore4_i = function () {
		var t = new eui.BitmapLabel();
		this.itemScore4 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 20;
		t.font = "GP_LD_RedEnvelope_Num1_fnt";
		t.height = 40;
		t.name = "4";
		t.text = "000000";
		t.textAlign = "center";
		t.width = 200;
		t.x = 491;
		t.y = 393.5;
		return t;
	};
	_proto.itemScore5_i = function () {
		var t = new eui.BitmapLabel();
		this.itemScore5 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 20;
		t.font = "GP_LD_RedEnvelope_Num1_fnt";
		t.height = 40;
		t.name = "5";
		t.text = "000000";
		t.textAlign = "center";
		t.width = 200;
		t.x = 642;
		t.y = 420;
		return t;
	};
	_proto.selectWordGroup_i = function () {
		var t = new eui.Group();
		this.selectWordGroup = t;
		t.percentHeight = 100;
		t.name = "selectWordGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this.selectWordImage_i(),this.selectCountLabel_i()];
		return t;
	};
	_proto.selectWordImage_i = function () {
		var t = new eui.Image();
		this.selectWordImage = t;
		t.horizontalCenter = 0;
		t.x = 480;
		t.y = 270;
		return t;
	};
	_proto.selectCountLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.selectCountLabel = t;
		t.font = "GP_LD_Pick_Num_fnt";
		t.horizontalCenter = -3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0";
		t.verticalCenter = -66;
		t.x = 363.00000000000006;
		t.y = 100;
		return t;
	};
	_proto.fxGroup_i = function () {
		var t = new eui.Group();
		this.fxGroup = t;
		t.horizontalCenter = 0;
		t.name = "fxGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.winCopyGroup_i = function () {
		var t = new eui.Group();
		this.winCopyGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.name = "winGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.winBGCopyImage_i(),this.winWordCopyImage_i(),this.winCopyLabel_i()];
		return t;
	};
	_proto.winBGCopyImage_i = function () {
		var t = new eui.Image();
		this.winBGCopyImage = t;
		t.horizontalCenter = 0;
		t.name = "winBGImage";
		t.source = "GP_LD_Win_Board_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winWordCopyImage_i = function () {
		var t = new eui.Image();
		this.winWordCopyImage = t;
		t.horizontalCenter = 0;
		t.name = "winWordImage";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winCopyLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.winCopyLabel = t;
		t.font = "GP_LD_Win_Num_fnt";
		t.horizontalCenter = 0;
		t.text = "0000000";
		t.verticalCenter = 77;
		return t;
	};
	_proto.winGroup_i = function () {
		var t = new eui.Group();
		this.winGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.name = "winGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.winBGImage_i(),this.winWordImage_i(),this.winLabel_i()];
		return t;
	};
	_proto.winBGImage_i = function () {
		var t = new eui.Image();
		this.winBGImage = t;
		t.horizontalCenter = 1;
		t.name = "winBGImage";
		t.source = "GP_LD_Win_Board_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winWordImage_i = function () {
		var t = new eui.Image();
		this.winWordImage = t;
		t.horizontalCenter = 0;
		t.name = "winWordImage";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.winLabel = t;
		t.font = "GP_LD_Win_Num_fnt";
		t.horizontalCenter = 0;
		t.text = "0000000";
		t.verticalCenter = 77;
		return t;
	};
	return BattleCaiShenFaFaFaSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattleFishArraySkin.exml'] = window.Fish.BattleFishArraySkin = (function (_super) {
	__extends(BattleFishArraySkin, _super);
	function BattleFishArraySkin() {
		_super.call(this);
		this.skinParts = ["outsidePoint_0","outsidePoint_1","outsidePoint_2","outsidePoint_3","outsidePoint_4","outsidePoint_5","outsidePoint_6","outsidePoint_7","outsidePoint_8","outsidePoint_9","outsidePoint_10","outsidePoint_11","outsidePointGroup","insidePoint_0","insidePoint_1","insidePoint_2","insidePoint_3","insidePoint_4","insidePoint_5","insidePoint_6","insidePoint_7","insidePoint_8","insidePoint_9","insidePoint_10","insidePoint_11","insidePointGroup","pathGroup","specialFishGroup","goldFishGroup","basicFishGroup","topFishGroup","fishGroup"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.pathGroup_i(),this.fishGroup_i()];
	}
	var _proto = BattleFishArraySkin.prototype;

	_proto.pathGroup_i = function () {
		var t = new eui.Group();
		this.pathGroup = t;
		t.height = 540;
		t.name = "PathPos_Group";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 960;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outsidePointGroup_i(),this.insidePointGroup_i()];
		return t;
	};
	_proto.outsidePointGroup_i = function () {
		var t = new eui.Group();
		this.outsidePointGroup = t;
		t.height = 540;
		t.name = "outsidePoint";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 960;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outsidePoint_0_i(),this.outsidePoint_1_i(),this.outsidePoint_2_i(),this.outsidePoint_3_i(),this.outsidePoint_4_i(),this.outsidePoint_5_i(),this.outsidePoint_6_i(),this.outsidePoint_7_i(),this.outsidePoint_8_i(),this.outsidePoint_9_i(),this.outsidePoint_10_i(),this.outsidePoint_11_i()];
		return t;
	};
	_proto.outsidePoint_0_i = function () {
		var t = new eui.Image();
		this.outsidePoint_0 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = -150;
		t.y = -150;
		return t;
	};
	_proto.outsidePoint_1_i = function () {
		var t = new eui.Image();
		this.outsidePoint_1 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 192;
		t.y = -150;
		return t;
	};
	_proto.outsidePoint_2_i = function () {
		var t = new eui.Image();
		this.outsidePoint_2 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 768;
		t.y = -150;
		return t;
	};
	_proto.outsidePoint_3_i = function () {
		var t = new eui.Image();
		this.outsidePoint_3 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 1110;
		t.y = -150;
		return t;
	};
	_proto.outsidePoint_4_i = function () {
		var t = new eui.Image();
		this.outsidePoint_4 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 1110;
		t.y = 108;
		return t;
	};
	_proto.outsidePoint_5_i = function () {
		var t = new eui.Image();
		this.outsidePoint_5 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 1110;
		t.y = 432;
		return t;
	};
	_proto.outsidePoint_6_i = function () {
		var t = new eui.Image();
		this.outsidePoint_6 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 1110;
		t.y = 710;
		return t;
	};
	_proto.outsidePoint_7_i = function () {
		var t = new eui.Image();
		this.outsidePoint_7 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 768;
		t.y = 710;
		return t;
	};
	_proto.outsidePoint_8_i = function () {
		var t = new eui.Image();
		this.outsidePoint_8 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 192;
		t.y = 710;
		return t;
	};
	_proto.outsidePoint_9_i = function () {
		var t = new eui.Image();
		this.outsidePoint_9 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = -150;
		t.y = 710;
		return t;
	};
	_proto.outsidePoint_10_i = function () {
		var t = new eui.Image();
		this.outsidePoint_10 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = -150;
		t.y = 432;
		return t;
	};
	_proto.outsidePoint_11_i = function () {
		var t = new eui.Image();
		this.outsidePoint_11 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = -150;
		t.y = 108;
		return t;
	};
	_proto.insidePointGroup_i = function () {
		var t = new eui.Group();
		this.insidePointGroup = t;
		t.height = 540;
		t.name = "insidePoint";
		t.width = 960;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.insidePoint_0_i(),this.insidePoint_1_i(),this.insidePoint_2_i(),this.insidePoint_3_i(),this.insidePoint_4_i(),this.insidePoint_5_i(),this.insidePoint_6_i(),this.insidePoint_7_i(),this.insidePoint_8_i(),this.insidePoint_9_i(),this.insidePoint_10_i(),this.insidePoint_11_i()];
		return t;
	};
	_proto.insidePoint_0_i = function () {
		var t = new eui.Image();
		this.insidePoint_0 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 192;
		t.y = 108;
		return t;
	};
	_proto.insidePoint_1_i = function () {
		var t = new eui.Image();
		this.insidePoint_1 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 384;
		t.y = 108;
		return t;
	};
	_proto.insidePoint_2_i = function () {
		var t = new eui.Image();
		this.insidePoint_2 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 576;
		t.y = 108;
		return t;
	};
	_proto.insidePoint_3_i = function () {
		var t = new eui.Image();
		this.insidePoint_3 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 768;
		t.y = 108;
		return t;
	};
	_proto.insidePoint_4_i = function () {
		var t = new eui.Image();
		this.insidePoint_4 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 768;
		t.y = 216;
		return t;
	};
	_proto.insidePoint_5_i = function () {
		var t = new eui.Image();
		this.insidePoint_5 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 768;
		t.y = 324;
		return t;
	};
	_proto.insidePoint_6_i = function () {
		var t = new eui.Image();
		this.insidePoint_6 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 768;
		t.y = 432;
		return t;
	};
	_proto.insidePoint_7_i = function () {
		var t = new eui.Image();
		this.insidePoint_7 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 576;
		t.y = 432;
		return t;
	};
	_proto.insidePoint_8_i = function () {
		var t = new eui.Image();
		this.insidePoint_8 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 384;
		t.y = 432;
		return t;
	};
	_proto.insidePoint_9_i = function () {
		var t = new eui.Image();
		this.insidePoint_9 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 192;
		t.y = 432;
		return t;
	};
	_proto.insidePoint_10_i = function () {
		var t = new eui.Image();
		this.insidePoint_10 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 192;
		t.y = 324;
		return t;
	};
	_proto.insidePoint_11_i = function () {
		var t = new eui.Image();
		this.insidePoint_11 = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 192;
		t.y = 216;
		return t;
	};
	_proto.fishGroup_i = function () {
		var t = new eui.Group();
		this.fishGroup = t;
		t.anchorOffsetX = 480;
		t.anchorOffsetY = 270;
		t.height = 540;
		t.name = "FishGroup";
		t.scrollEnabled = true;
		t.scrollRect = new egret.Rectangle(x=0,y=0,width=960,height=540);
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 960;
		t.x = 480;
		t.y = 270;
		t.elementsContent = [this.specialFishGroup_i(),this.goldFishGroup_i(),this.basicFishGroup_i(),this.topFishGroup_i()];
		return t;
	};
	_proto.specialFishGroup_i = function () {
		var t = new eui.Group();
		this.specialFishGroup = t;
		t.height = 0;
		t.name = "SpecialFishGroup";
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goldFishGroup_i = function () {
		var t = new eui.Group();
		this.goldFishGroup = t;
		t.height = 0;
		t.name = "GoldFishGroup";
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.basicFishGroup_i = function () {
		var t = new eui.Group();
		this.basicFishGroup = t;
		t.height = 0;
		t.name = "BasicFishGroup";
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topFishGroup_i = function () {
		var t = new eui.Group();
		this.topFishGroup = t;
		t.height = 0;
		t.name = "TopFishGroup";
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return BattleFishArraySkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattleInfoButtonIRSkin.exml'] = window.Fish.BattleInfoButtonIRSkin = (function (_super) {
	__extends(BattleInfoButtonIRSkin, _super);
	var BattleInfoButtonIRSkin$Skin1 = 	(function (_super) {
		__extends(BattleInfoButtonIRSkin$Skin1, _super);
		function BattleInfoButtonIRSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleInfoButtonIRSkin$Skin1.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleInfoButtonIRSkin$Skin1;
	})(eui.Skin);

	function BattleInfoButtonIRSkin() {
		_super.call(this);
		this.skinParts = ["zoneButton"];
		
		this.height = 80;
		this.width = 80;
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.bgImage"],[0],this.zoneButton,"icon");
	}
	var _proto = BattleInfoButtonIRSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.zoneButton_i()];
		return t;
	};
	_proto.zoneButton_i = function () {
		var t = new eui.Button();
		this.zoneButton = t;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.skinName = BattleInfoButtonIRSkin$Skin1;
		return t;
	};
	return BattleInfoButtonIRSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattleInfoSkin.exml'] = window.Fish.BattleInfoSkin = (function (_super) {
	__extends(BattleInfoSkin, _super);
	function BattleInfoSkin() {
		_super.call(this);
		this.skinParts = ["roomInfoZoneTypeImage","roomNumberLabel","denomRangeLabel"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BattleInfoSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 0;
		t.name = "roomInfoGroup";
		t.top = 5;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 140;
		t.elementsContent = [this._Image1_i(),this.roomInfoZoneTypeImage_i(),this.roomNumberLabel_i(),this.denomRangeLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.name = "roomInfo_BG";
		t.scale9Grid = new egret.Rectangle(8,7,1,46);
		t.source = "UI_Room_Frame_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.roomInfoZoneTypeImage_i = function () {
		var t = new eui.Image();
		this.roomInfoZoneTypeImage = t;
		t.left = 45;
		t.name = "roomInfo_Fun";
		return t;
	};
	_proto.roomNumberLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.roomNumberLabel = t;
		t.font = "UI_Room_Num_fnt";
		t.height = 37;
		t.horizontalCenter = 40;
		t.letterSpacing = -15;
		t.name = "roomInfo_Number";
		t.text = "001";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.denomRangeLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.denomRangeLabel = t;
		t.font = "UI_Room_Num_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = -13;
		t.name = "roomInfo_Denom";
		t.text = "$0.001-$1,000";
		t.textAlign = "center";
		t.top = 30;
		t.verticalAlign = "middle";
		return t;
	};
	return BattleInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattlePlayerArraySkin.exml'] = window.Fish.BattlePlayerArraySkin = (function (_super) {
	__extends(BattlePlayerArraySkin, _super);
	function BattlePlayerArraySkin() {
		_super.call(this);
		this.skinParts = ["player0","player1","player2","player3","playerGroup"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.playerGroup_i()];
	}
	var _proto = BattlePlayerArraySkin.prototype;

	_proto.playerGroup_i = function () {
		var t = new eui.Group();
		this.playerGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.player0_i(),this.player1_i(),this.player2_i(),this.player3_i()];
		return t;
	};
	_proto.player0_i = function () {
		var t = new BattlePlayerSkinView();
		this.player0 = t;
		t.bottom = 0;
		t.right = 10;
		return t;
	};
	_proto.player1_i = function () {
		var t = new BattlePlayerSkinView();
		this.player1 = t;
		t.bottom = 0;
		t.left = 10;
		return t;
	};
	_proto.player2_i = function () {
		var t = new BattlePlayerSkinView();
		this.player2 = t;
		t.left = 10;
		t.rotation = 180;
		t.top = 0;
		return t;
	};
	_proto.player3_i = function () {
		var t = new BattlePlayerSkinView();
		this.player3 = t;
		t.right = 10;
		t.rotation = 180;
		t.top = 0;
		return t;
	};
	return BattlePlayerArraySkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattlePlayerLRPortSkin.exml'] = window.Fish.BattlePlayerLRPortSkin = (function (_super) {
	__extends(BattlePlayerLRPortSkin, _super);
	function BattlePlayerLRPortSkin() {
		_super.call(this);
		this.skinParts = ["freeBulletBGImage","freeBulletCountLabel","freeBulletGroup","creditLabel","creditCoinGroup","creditGroup","anchorGroup"];
		
		this.height = 248;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("freeBulletCountLabel","y",25)
				])
			,
			new eui.State ("cn",
				[
				])
			,
			new eui.State ("en",
				[
				])
			,
			new eui.State ("th",
				[
				])
		];
	}
	var _proto = BattlePlayerLRPortSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.freeBulletGroup_i(),this.creditGroup_i(),this.anchorGroup_i()];
		return t;
	};
	_proto.freeBulletGroup_i = function () {
		var t = new eui.Group();
		this.freeBulletGroup = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 35;
		t.bottom = 30;
		t.horizontalCenter = 0;
		t.left = 10;
		t.name = "OtherRight";
		t.y = 170;
		t.elementsContent = [this.freeBulletBGImage_i(),this.freeBulletCountLabel_i()];
		return t;
	};
	_proto.freeBulletBGImage_i = function () {
		var t = new eui.Image();
		this.freeBulletBGImage = t;
		t.fillMode = "scale";
		t.height = 69;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "GP_Gun2_Board_png";
		t.width = 156;
		return t;
	};
	_proto.freeBulletCountLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.freeBulletCountLabel = t;
		t.font = "GP_Gun2_Num_fnt";
		t.horizontalCenter = 20;
		t.text = "000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.creditGroup_i = function () {
		var t = new eui.Group();
		this.creditGroup = t;
		t.bottom = 0;
		t.name = "SelfLeft";
		t.right = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 208;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.creditLabel_i(),this.creditCoinGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.fillMode = "scale";
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(10,18,1,1);
		t.source = "UI_Credit_Board_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 5;
		t.left = 5;
		t.source = "UI_Credit_Coin_png";
		return t;
	};
	_proto.creditLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.creditLabel = t;
		t.font = "UI_Credit_Num_fnt";
		t.text = "$000,000,000.00";
		t.textAlign = "right";
		t.width = 200;
		t.x = -5;
		t.y = 11;
		return t;
	};
	_proto.creditCoinGroup_i = function () {
		var t = new eui.Group();
		this.creditCoinGroup = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.anchorGroup_i = function () {
		var t = new eui.Group();
		this.anchorGroup = t;
		t.x = 50;
		t.y = 184;
		return t;
	};
	return BattlePlayerLRPortSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattlePlayerSkin.exml'] = window.Fish.BattlePlayerSkin = (function (_super) {
	__extends(BattlePlayerSkin, _super);
	var BattlePlayerSkin$Skin2 = 	(function (_super) {
		__extends(BattlePlayerSkin$Skin2, _super);
		function BattlePlayerSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","UI_BTN_BetPlus_02_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","UI_BTN_BetPlus_03_png")
					])
			];
		}
		var _proto = BattlePlayerSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "UI_BTN_BetPlus_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattlePlayerSkin$Skin2;
	})(eui.Skin);

	var BattlePlayerSkin$Skin3 = 	(function (_super) {
		__extends(BattlePlayerSkin$Skin3, _super);
		function BattlePlayerSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","UI_BTN_BetMinis_02_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","UI_BTN_BetMinis_03_png")
					])
			];
		}
		var _proto = BattlePlayerSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "UI_BTN_BetMinis_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattlePlayerSkin$Skin3;
	})(eui.Skin);

	function BattlePlayerSkin() {
		_super.call(this);
		this.skinParts = ["leftPortGroup","rightPortGroup","medalsGroup","fortBaseImage","firePointGroup","centerPointGroup","fortBarrelGroup","fortBaseGroup","effectGroup","weaponRotationGroup","weaponGroup","betBG","betLabel","betGroup","addBetButtom","reduseBetButtom","betPopLabel","betPopGroup","betControlGroup","playerGroup","waittingImage","waittingGroup"];
		
		this.height = 250;
		this.width = 580;
		this.elementsContent = [this.playerGroup_i(),this.waittingGroup_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("leftPortGroup","left",0),
					new eui.SetProperty("rightPortGroup","right",0),
					new eui.SetProperty("waittingImage","source","UI_Wait_Msg_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("waittingImage","source","UI_Wait_Msg_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("waittingImage","source","UI_Wait_Msg_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("waittingImage","source","UI_Wait_Msg_th_png")
				])
		];
	}
	var _proto = BattlePlayerSkin.prototype;

	_proto.playerGroup_i = function () {
		var t = new eui.Group();
		this.playerGroup = t;
		t.percentHeight = 100;
		t.rotation = 0;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this.leftPortGroup_i(),this.rightPortGroup_i(),this.medalsGroup_i(),this.weaponGroup_i(),this.betGroup_i(),this.betControlGroup_i()];
		return t;
	};
	_proto.leftPortGroup_i = function () {
		var t = new eui.Group();
		this.leftPortGroup = t;
		t.left = -8;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.rightPortGroup_i = function () {
		var t = new eui.Group();
		this.rightPortGroup = t;
		t.right = -8;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.medalsGroup_i = function () {
		var t = new eui.Group();
		this.medalsGroup = t;
		t.bottom = 30;
		t.horizontalCenter = 0;
		return t;
	};
	_proto.weaponGroup_i = function () {
		var t = new eui.Group();
		this.weaponGroup = t;
		t.percentHeight = 100;
		t.name = "WeaponGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 1;
		t.elementsContent = [this.fortBaseImage_i(),this.weaponRotationGroup_i()];
		return t;
	};
	_proto.fortBaseImage_i = function () {
		var t = new eui.Image();
		this.fortBaseImage = t;
		t.bottom = 0;
		t.horizontalCenter = -2.5;
		t.name = "fortBaseImage";
		t.source = "GP_GunSeat_png";
		return t;
	};
	_proto.weaponRotationGroup_i = function () {
		var t = new eui.Group();
		this.weaponRotationGroup = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.name = "weaponRotationGroup";
		t.touchEnabled = false;
		t.width = 200;
		t.y = 218;
		t.elementsContent = [this.firePointGroup_i(),this.centerPointGroup_i(),this.fortBarrelGroup_i(),this.fortBaseGroup_i(),this.effectGroup_i()];
		return t;
	};
	_proto.firePointGroup_i = function () {
		var t = new eui.Group();
		this.firePointGroup = t;
		t.name = "firePointGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 100;
		t.y = -15;
		return t;
	};
	_proto.centerPointGroup_i = function () {
		var t = new eui.Group();
		this.centerPointGroup = t;
		t.name = "centerPointGroup";
		t.touchEnabled = false;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto.fortBarrelGroup_i = function () {
		var t = new eui.Group();
		this.fortBarrelGroup = t;
		t.horizontalCenter = 0;
		t.name = "fortBarrelGroup";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.fortBaseGroup_i = function () {
		var t = new eui.Group();
		this.fortBaseGroup = t;
		t.horizontalCenter = 0;
		t.name = "fortBaseGroup";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.effectGroup_i = function () {
		var t = new eui.Group();
		this.effectGroup = t;
		t.name = "effectGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 100;
		t.y = -15;
		return t;
	};
	_proto.betGroup_i = function () {
		var t = new eui.Group();
		this.betGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.name = "Bet";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 212;
		t.elementsContent = [this.betBG_i(),this.betLabel_i()];
		return t;
	};
	_proto.betBG_i = function () {
		var t = new eui.Image();
		this.betBG = t;
		t.bottom = -2;
		t.height = 38;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,16,0,0);
		t.source = "UI_Bet_Board1_png";
		t.width = 110;
		t.y = 49;
		return t;
	};
	_proto.betLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.betLabel = t;
		t.bottom = 10;
		t.font = "UI_Bet_Num1_fnt";
		t.horizontalCenter = 0;
		t.text = "$1000";
		t.textAlign = "center";
		return t;
	};
	_proto.betControlGroup_i = function () {
		var t = new eui.Group();
		this.betControlGroup = t;
		t.percentHeight = 100;
		t.name = "betControlGroup";
		t.touchChildren = true;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.elementsContent = [this.addBetButtom_i(),this.reduseBetButtom_i(),this.betPopGroup_i()];
		return t;
	};
	_proto.addBetButtom_i = function () {
		var t = new eui.Button();
		this.addBetButtom = t;
		t.bottom = 0;
		t.enabled = true;
		t.height = 50;
		t.horizontalCenter = 54;
		t.label = "";
		t.name = "addBetButtom";
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 50;
		t.skinName = BattlePlayerSkin$Skin2;
		return t;
	};
	_proto.reduseBetButtom_i = function () {
		var t = new eui.Button();
		this.reduseBetButtom = t;
		t.bottom = 0;
		t.enabled = true;
		t.height = 50;
		t.horizontalCenter = -54;
		t.label = "";
		t.name = "reduseBetButtom";
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 50;
		t.skinName = BattlePlayerSkin$Skin3;
		return t;
	};
	_proto.betPopGroup_i = function () {
		var t = new eui.Group();
		this.betPopGroup = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 26;
		t.height = 50;
		t.horizontalCenter = 0;
		t.name = "betPopGroup";
		t.touchEnabled = false;
		t.verticalCenter = -25;
		t.width = 100;
		t.elementsContent = [this._Image1_i(),this.betPopLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(4,5,1,47);
		t.source = "UI_Bet_Board2_png";
		t.width = 180;
		return t;
	};
	_proto.betPopLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.betPopLabel = t;
		t.font = "UI_Bet_Num2_fnt";
		t.horizontalCenter = 0;
		t.name = "betPopLabel";
		t.text = "$1000";
		t.verticalCenter = 0;
		return t;
	};
	_proto.waittingGroup_i = function () {
		var t = new eui.Group();
		this.waittingGroup = t;
		t.bottom = 5;
		t.height = 50;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 120;
		t.elementsContent = [this.waittingImage_i(),this._Image2_i()];
		return t;
	};
	_proto.waittingImage_i = function () {
		var t = new eui.Image();
		this.waittingImage = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(16,29,0,2);
		t.source = "UI_Waiting_01_png";
		t.percentWidth = 100;
		return t;
	};
	return BattlePlayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattleSkin.exml'] = window.Fish.BattleSkin = (function (_super) {
	__extends(BattleSkin, _super);
	function BattleSkin() {
		_super.call(this);
		this.skinParts = ["nextBGImage","currectBGImage"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.nextBGImage_i(),this.currectBGImage_i()];
	}
	var _proto = BattleSkin.prototype;

	_proto.nextBGImage_i = function () {
		var t = new eui.Image();
		this.nextBGImage = t;
		t.anchorOffsetX = 480;
		t.anchorOffsetY = 270;
		t.height = 540;
		t.width = 960;
		t.x = 480;
		t.y = 270;
		return t;
	};
	_proto.currectBGImage_i = function () {
		var t = new eui.Image();
		this.currectBGImage = t;
		t.anchorOffsetX = 480;
		t.anchorOffsetY = 270;
		t.fillMode = "scale";
		t.height = 540;
		t.width = 960;
		t.x = 480;
		t.y = 270;
		return t;
	};
	return BattleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattleSpecialButtonSkin.exml'] = window.Fish.BattleSpecialButtonSkin = (function (_super) {
	__extends(BattleSpecialButtonSkin, _super);
	function BattleSpecialButtonSkin() {
		_super.call(this);
		this.skinParts = ["btnAuto","btnAutoFocus","btnLock","btnLockFocus"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this._Group3_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("btnAuto","source","UI_Auto_01_tw_png"),
					new eui.SetProperty("btnAutoFocus","source","UI_Auto_02_tw_png"),
					new eui.SetProperty("btnLock","source","UI_Aim_01_tw_png"),
					new eui.SetProperty("btnLockFocus","source","UI_Aim_02_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("btnAuto","source","UI_Auto_01_cn_png"),
					new eui.SetProperty("btnAutoFocus","source","UI_Auto_02_cn_png"),
					new eui.SetProperty("btnLock","source","UI_Aim_01_cn_png"),
					new eui.SetProperty("btnLockFocus","source","UI_Aim_02_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("btnAuto","source","UI_Auto_01_en_png"),
					new eui.SetProperty("btnAutoFocus","source","UI_Auto_02_en_png"),
					new eui.SetProperty("btnLock","source","UI_Aim_01_en_png"),
					new eui.SetProperty("btnLockFocus","source","UI_Aim_02_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("btnAuto","source","UI_Auto_01_th_png"),
					new eui.SetProperty("btnAutoFocus","source","UI_Auto_02_th_png"),
					new eui.SetProperty("btnLock","source","UI_Aim_01_th_png"),
					new eui.SetProperty("btnLockFocus","source","UI_Aim_02_th_png")
				])
		];
	}
	var _proto = BattleSpecialButtonSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 598;
		t.y = 203;
		t.elementsContent = [this.btnAuto_i(),this.btnAutoFocus_i()];
		return t;
	};
	_proto.btnAuto_i = function () {
		var t = new eui.Image();
		this.btnAuto = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.btnAutoFocus_i = function () {
		var t = new eui.Image();
		this.btnAutoFocus = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 91;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.btnLock_i(),this.btnLockFocus_i()];
		return t;
	};
	_proto.btnLock_i = function () {
		var t = new eui.Image();
		this.btnLock = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 91;
		t.y = 0;
		return t;
	};
	_proto.btnLockFocus_i = function () {
		var t = new eui.Image();
		this.btnLockFocus = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 91;
		t.y = 0;
		return t;
	};
	return BattleSpecialButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattleWaveSkin.exml'] = window.Fish.BattleWaveSkin = (function (_super) {
	__extends(BattleWaveSkin, _super);
	function BattleWaveSkin() {
		_super.call(this);
		this.skinParts = ["waveMoveGroup","waveWordImage","waveSpurtGroup"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.waveMoveGroup_i(),this.waveWordImage_i(),this.waveSpurtGroup_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("waveMoveGroup","name","waveMoveGroup"),
					new eui.SetProperty("waveWordImage","source","GP_TST_Msg_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("waveWordImage","source","GP_TST_Msg_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("waveWordImage","source","GP_TST_Msg_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("waveWordImage","source","GP_TST_Msg_th_png")
				])
		];
	}
	var _proto = BattleWaveSkin.prototype;

	_proto.waveMoveGroup_i = function () {
		var t = new eui.Group();
		this.waveMoveGroup = t;
		t.name = "waveMoveGroup";
		t.rotation = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.waveWordImage_i = function () {
		var t = new eui.Image();
		this.waveWordImage = t;
		t.horizontalCenter = 0;
		t.name = "waveWordImage";
		t.verticalCenter = -50;
		return t;
	};
	_proto.waveSpurtGroup_i = function () {
		var t = new eui.Group();
		this.waveSpurtGroup = t;
		t.horizontalCenter = 0;
		t.name = "waveSpurtGroup";
		t.verticalCenter = 0;
		return t;
	};
	return BattleWaveSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/BattleWheelOfFortuneSkin.exml'] = window.Fish.BattleWheelOfFortuneSkin = (function (_super) {
	__extends(BattleWheelOfFortuneSkin, _super);
	function BattleWheelOfFortuneSkin() {
		_super.call(this);
		this.skinParts = ["maskImage","titleWordImage","rouletteImage","itemScoreGroup","itemMaskGroup","rouletteGroup","rouletteMaskImage","bgLightGroup","pointerFX02Image","pointerFX01Image","pointerFX01CopyImage","pointerGroup","betWordLabel","fxGroup","wheelGroup","winBGCopyImage","winWordCopyImage","winCopyLabel","winCopyGroup","winBGImage","winWordImage","winLabel","winGroup","newStartAnimationGroup","mainGroup"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.mainGroup_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("titleWordImage","source","GP_Roulette_Msg_tw_png"),
					new eui.SetProperty("winBGCopyImage","verticalCenter",0),
					new eui.SetProperty("winBGCopyImage","source","GP_LD_Win_Board_png"),
					new eui.SetProperty("winWordCopyImage","source","GP_LD_Win_Msg_tw_png"),
					new eui.SetProperty("winCopyGroup","percentWidth",100),
					new eui.SetProperty("winCopyGroup","percentHeight",100),
					new eui.SetProperty("winBGImage","verticalCenter",0),
					new eui.SetProperty("winBGImage","source","GP_LD_Win_Board_png"),
					new eui.SetProperty("winWordImage","source","GP_LD_Win_Msg_tw_png"),
					new eui.SetProperty("winGroup","percentWidth",100),
					new eui.SetProperty("winGroup","percentHeight",100)
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("titleWordImage","source","GP_Roulette_Msg_cn_png"),
					new eui.SetProperty("winWordCopyImage","source","GP_LD_Win_Msg_cn_png"),
					new eui.SetProperty("winWordImage","source","GP_LD_Win_Msg_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("titleWordImage","source","GP_Roulette_Msg_en_png"),
					new eui.SetProperty("winWordCopyImage","source","GP_LD_Win_Msg_en_png"),
					new eui.SetProperty("winWordImage","source","GP_LD_Win_Msg_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("titleWordImage","source","GP_Roulette_Msg_th_png"),
					new eui.SetProperty("winWordCopyImage","source","GP_LD_Win_Msg_th_png"),
					new eui.SetProperty("winWordImage","source","GP_LD_Win_Msg_th_png")
				])
		];
	}
	var _proto = BattleWheelOfFortuneSkin.prototype;

	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.maskImage_i(),this.titleWordImage_i(),this.wheelGroup_i(),this.winCopyGroup_i(),this.winGroup_i(),this.newStartAnimationGroup_i()];
		return t;
	};
	_proto.maskImage_i = function () {
		var t = new eui.Image();
		this.maskImage = t;
		t.alpha = 0.7;
		t.percentHeight = 100;
		t.source = "GP_Mask_png";
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.titleWordImage_i = function () {
		var t = new eui.Image();
		this.titleWordImage = t;
		t.horizontalCenter = 0;
		t.top = 90;
		t.touchEnabled = false;
		return t;
	};
	_proto.wheelGroup_i = function () {
		var t = new eui.Group();
		this.wheelGroup = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 3.03;
		t.y = 0;
		t.elementsContent = [this.rouletteGroup_i(),this.rouletteMaskImage_i(),this.bgLightGroup_i(),this._Image3_i(),this.pointerGroup_i(),this.betWordLabel_i(),this.fxGroup_i()];
		return t;
	};
	_proto.rouletteGroup_i = function () {
		var t = new eui.Group();
		this.rouletteGroup = t;
		t.bottom = 11;
		t.height = 0;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 0;
		t.elementsContent = [this.rouletteImage_i(),this.itemScoreGroup_i(),this.itemMaskGroup_i()];
		return t;
	};
	_proto.rouletteImage_i = function () {
		var t = new eui.Image();
		this.rouletteImage = t;
		t.anchorOffsetX = 500;
		t.anchorOffsetY = 500;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "GP_Roulette_BG_02_png";
		t.touchEnabled = true;
		return t;
	};
	_proto.itemScoreGroup_i = function () {
		var t = new eui.Group();
		this.itemScoreGroup = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.itemMaskGroup_i = function () {
		var t = new eui.Group();
		this.itemMaskGroup = t;
		t.touchEnabled = false;
		return t;
	};
	_proto.rouletteMaskImage_i = function () {
		var t = new eui.Image();
		this.rouletteMaskImage = t;
		t.anchorOffsetX = 500;
		t.anchorOffsetY = 500;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "GP_Roulette_BG_03_png";
		t.touchEnabled = false;
		t.x = 480;
		t.y = 529;
		return t;
	};
	_proto.bgLightGroup_i = function () {
		var t = new eui.Group();
		this.bgLightGroup = t;
		t.percentHeight = 100;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 190;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "GP_Roulette_BGFX_png";
		t.touchEnabled = false;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -190;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "GP_Roulette_BGFX_png";
		t.touchEnabled = false;
		t.x = 480;
		t.y = 130;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = -20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "GP_Roulette_BG_01_png";
		t.touchEnabled = false;
		t.x = 146;
		t.y = 173;
		return t;
	};
	_proto.pointerGroup_i = function () {
		var t = new eui.Group();
		this.pointerGroup = t;
		t.bottom = 11;
		t.height = 0;
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 0;
		t.elementsContent = [this.pointerFX02Image_i(),this.pointerFX01Image_i(),this.pointerFX01CopyImage_i(),this._Image4_i()];
		return t;
	};
	_proto.pointerFX02Image_i = function () {
		var t = new eui.Image();
		this.pointerFX02Image = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 303.5;
		t.anchorOffsetY = 163;
		t.source = "GP_Roulette_PointerFX_02_png";
		t.y = -201;
		return t;
	};
	_proto.pointerFX01Image_i = function () {
		var t = new eui.Image();
		this.pointerFX01Image = t;
		t.anchorOffsetX = 123.5;
		t.anchorOffsetY = 99;
		t.source = "GP_Roulette_PointerFX_01_png";
		t.y = -226;
		return t;
	};
	_proto.pointerFX01CopyImage_i = function () {
		var t = new eui.Image();
		this.pointerFX01CopyImage = t;
		t.anchorOffsetX = 123.5;
		t.anchorOffsetY = 99;
		t.source = "GP_Roulette_PointerFX_01_png";
		t.y = -226;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 60;
		t.source = "GP_Roulette_Pointer_png";
		t.y = -153;
		return t;
	};
	_proto.betWordLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.betWordLabel = t;
		t.bottom = -5;
		t.font = "GP_Roulette_Bet_fnt";
		t.horizontalCenter = 0;
		t.text = "00";
		t.touchEnabled = false;
		return t;
	};
	_proto.fxGroup_i = function () {
		var t = new eui.Group();
		this.fxGroup = t;
		t.horizontalCenter = 0;
		t.name = "fxGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.winCopyGroup_i = function () {
		var t = new eui.Group();
		this.winCopyGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.name = "winGroup";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.winBGCopyImage_i(),this.winWordCopyImage_i(),this.winCopyLabel_i()];
		return t;
	};
	_proto.winBGCopyImage_i = function () {
		var t = new eui.Image();
		this.winBGCopyImage = t;
		t.horizontalCenter = 0;
		t.name = "winBGImage";
		t.source = "GP_LD_Win_Board_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winWordCopyImage_i = function () {
		var t = new eui.Image();
		this.winWordCopyImage = t;
		t.horizontalCenter = 0;
		t.name = "winWordImage";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winCopyLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.winCopyLabel = t;
		t.font = "GP_LD_Win_Num_fnt";
		t.horizontalCenter = 0;
		t.text = "0000000";
		t.verticalCenter = 77;
		return t;
	};
	_proto.winGroup_i = function () {
		var t = new eui.Group();
		this.winGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.name = "winGroup";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.winBGImage_i(),this.winWordImage_i(),this.winLabel_i()];
		return t;
	};
	_proto.winBGImage_i = function () {
		var t = new eui.Image();
		this.winBGImage = t;
		t.horizontalCenter = 1;
		t.name = "winBGImage";
		t.source = "GP_LD_Win_Board_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winWordImage_i = function () {
		var t = new eui.Image();
		this.winWordImage = t;
		t.horizontalCenter = 0;
		t.name = "winWordImage";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.winLabel = t;
		t.font = "GP_LD_Win_Num_fnt";
		t.horizontalCenter = 0;
		t.text = "0000000";
		t.verticalCenter = 77;
		return t;
	};
	_proto.newStartAnimationGroup_i = function () {
		var t = new eui.Group();
		this.newStartAnimationGroup = t;
		t.percentHeight = 100;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	return BattleWheelOfFortuneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/DebugIRSkin.exml'] = window.Fish.DebugIRSkin = (function (_super) {
	__extends(DebugIRSkin, _super);
	function DebugIRSkin() {
		_super.call(this);
		this.skinParts = ["key","value","textInput"];
		
		this.minHeight = 50;
		this.minWidth = 500;
		this.elementsContent = [this._Rect1_i(),this.key_i(),this.value_i(),this.textInput_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textInput","textColor",0xff0000)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.key,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.value,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.textInput,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.textInput,"visible");
	}
	var _proto = DebugIRSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.key_i = function () {
		var t = new eui.Label();
		this.key = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.value_i = function () {
		var t = new eui.Label();
		this.value = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 200;
		t.right = 8;
		t.size = 20;
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textInput_i = function () {
		var t = new eui.EditableText();
		this.textInput = t;
		t.background = true;
		t.backgroundColor = 0x99e5f7;
		t.bottom = "8";
		t.left = "400";
		t.right = "8";
		t.size = 20;
		t.textColor = 0xe23b3b;
		t.top = "8";
		t.touchEnabled = true;
		return t;
	};
	return DebugIRSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/DebugListSkin.exml'] = window.Fish.DebugListSkin = (function (_super) {
	__extends(DebugListSkin, _super);
	function DebugListSkin() {
		_super.call(this);
		this.skinParts = ["list","scroller"];
		
		this.height = 400;
		this.width = 600;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DebugListSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.scroller_i()];
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.percentHeight = 100;
		t.itemRenderer = DebugIRSkinView;
		t.itemRendererSkinName = Fish.DebugIRSkin;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return DebugListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/DebugSkin.exml'] = window.Fish.DebugSkin = (function (_super) {
	__extends(DebugSkin, _super);
	function DebugSkin() {
		_super.call(this);
		this.skinParts = ["toggleButton","tabBar","viewGroup"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.viewStack"],[0],this.tabBar,"dataProvider");
	}
	var _proto = DebugSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.toggleButton_i(),this.viewGroup_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.toggleButton_i = function () {
		var t = new eui.ToggleButton();
		this.toggleButton = t;
		t.label = "Debug";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.viewGroup_i = function () {
		var t = new eui.Group();
		this.viewGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.tabBar_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.tabBar_i = function () {
		var t = new eui.TabBar();
		this.tabBar = t;
		t.percentHeight = 100;
		t.width = 250;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	return DebugSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/EventBannerSkin.exml'] = window.Fish.EventBannerSkin = (function (_super) {
	__extends(EventBannerSkin, _super);
	var EventBannerSkin$Skin4 = 	(function (_super) {
		__extends(EventBannerSkin$Skin4, _super);
		function EventBannerSkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","UI_Help_Off_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","UI_Help_Off_png")
					])
			];
		}
		var _proto = EventBannerSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "UI_Help_Off_png";
			t.percentWidth = 100;
			return t;
		};
		return EventBannerSkin$Skin4;
	})(eui.Skin);

	function EventBannerSkin() {
		_super.call(this);
		this.skinParts = ["bgGroup","imgGroup","exitButton"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.bgGroup_i(),this.imgGroup_i(),this._Image3_i(),this.exitButton_i()];
	}
	var _proto = EventBannerSkin.prototype;

	_proto.bgGroup_i = function () {
		var t = new eui.Group();
		this.bgGroup = t;
		t.verticalCenter = 0;
		t.x = 480;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "UI_PromoteBoard_png";
		t.x = -357;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "UI_PromoteBoard_png";
		t.x = 357;
		return t;
	};
	_proto.imgGroup_i = function () {
		var t = new eui.Group();
		this.imgGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 29;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_PromoteMsg_cn_png";
		t.top = 51;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Button();
		this.exitButton = t;
		t.right = 105;
		t.top = 64;
		t.touchEnabled = true;
		t.skinName = EventBannerSkin$Skin4;
		return t;
	};
	return EventBannerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/GuideBattleSkin.exml'] = window.Fish.GuideBattleSkin = (function (_super) {
	__extends(GuideBattleSkin, _super);
	function GuideBattleSkin() {
		_super.call(this);
		this.skinParts = ["maskImage","leftBattlePlayerSkinView","leftYourPositionWordImage","leftSignImage","leftCircleImage","leftPlayerGroup","rightBattlePlayerSkinView","rightYourPositionWordImage","rightSignImage","rightCircleImage","rightPlayerGroup","menuImage","lockImage","autoImage","menuLine1Image","menuLine2Image","menuLine5Image","menuLineGroup","menuLineMaskGroup","lockLine1Image","lockLine2Image","lockLine3Image","lockLine4Image","lockLine5Image","lockLineGroup","lockLineMaskGroup","autoLine1Image","autoLine2Image","autoLine3Image","autoLine4Image","autoLine5Image","autoLineGroup","autoLineMaskGroup","guideGroup"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.maskImage_i(),this.leftPlayerGroup_i(),this.rightPlayerGroup_i(),this.guideGroup_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("leftYourPositionWordImage","source","UI_Start_Location1_tw_png"),
					new eui.SetProperty("rightYourPositionWordImage","source","UI_Start_Location1_tw_png"),
					new eui.SetProperty("menuImage","source","UI_Start_Menu_tw_png"),
					new eui.SetProperty("lockImage","source","UI_Start_Aim_tw_png"),
					new eui.SetProperty("autoImage","source","UI_Start_AutoFire_tw_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("leftYourPositionWordImage","source","UI_Start_Location1_en_png"),
					new eui.SetProperty("rightYourPositionWordImage","source","UI_Start_Location1_en_png"),
					new eui.SetProperty("menuImage","source","UI_Start_Menu_en_png"),
					new eui.SetProperty("lockImage","source","UI_Start_Aim_en_png"),
					new eui.SetProperty("autoImage","source","UI_Start_AutoFire_en_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("leftYourPositionWordImage","source","UI_Start_Location1_cn_png"),
					new eui.SetProperty("rightYourPositionWordImage","source","UI_Start_Location1_cn_png"),
					new eui.SetProperty("menuImage","source","UI_Start_Menu_cn_png"),
					new eui.SetProperty("lockImage","source","UI_Start_Aim_cn_png"),
					new eui.SetProperty("autoImage","source","UI_Start_AutoFire_cn_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("leftYourPositionWordImage","source","UI_Start_Location1_th_png"),
					new eui.SetProperty("rightYourPositionWordImage","source","UI_Start_Location1_th_png"),
					new eui.SetProperty("menuImage","source","UI_Start_Menu_th_png"),
					new eui.SetProperty("lockImage","source","UI_Start_Aim_th_png"),
					new eui.SetProperty("autoImage","source","UI_Start_AutoFire_th_png")
				])
		];
	}
	var _proto = GuideBattleSkin.prototype;

	_proto.maskImage_i = function () {
		var t = new eui.Image();
		this.maskImage = t;
		t.alpha = 0.5;
		t.height = 540;
		t.name = "maskImage";
		t.source = "GP_Mask_png";
		t.width = 960;
		return t;
	};
	_proto.leftPlayerGroup_i = function () {
		var t = new eui.Group();
		this.leftPlayerGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.name = "leftPlayerGroup";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this.leftBattlePlayerSkinView_i(),this._Group1_i()];
		return t;
	};
	_proto.leftBattlePlayerSkinView_i = function () {
		var t = new BattlePlayerSkinView();
		this.leftBattlePlayerSkinView = t;
		t.bottom = 0;
		t.left = 10;
		t.name = "leftBattlePlayerSkinView";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = -80;
		t.horizontalCenter = 5;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.leftYourPositionWordImage_i(),this.leftSignImage_i(),this.leftCircleImage_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -20;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.leftYourPositionWordImage_i = function () {
		var t = new eui.Image();
		this.leftYourPositionWordImage = t;
		t.bottom = 130;
		t.left = 150;
		return t;
	};
	_proto.leftSignImage_i = function () {
		var t = new eui.Image();
		this.leftSignImage = t;
		t.left = 245;
		t.source = "UI_Start_Location2_png";
		t.y = 90;
		return t;
	};
	_proto.leftCircleImage_i = function () {
		var t = new eui.Image();
		this.leftCircleImage = t;
		t.anchorOffsetX = 93;
		t.anchorOffsetY = 95;
		t.source = "UI_Start_Line5_png";
		t.x = 280;
		t.y = 223;
		return t;
	};
	_proto.rightPlayerGroup_i = function () {
		var t = new eui.Group();
		this.rightPlayerGroup = t;
		t.bottom = 0;
		t.name = "rightPlayerGroup";
		t.right = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this.rightBattlePlayerSkinView_i(),this._Group2_i()];
		return t;
	};
	_proto.rightBattlePlayerSkinView_i = function () {
		var t = new BattlePlayerSkinView();
		this.rightBattlePlayerSkinView = t;
		t.bottom = 0;
		t.name = "rightBattlePlayerSkinView";
		t.right = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = -80;
		t.horizontalCenter = -5;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.rightYourPositionWordImage_i(),this.rightSignImage_i(),this.rightCircleImage_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -20;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.rightYourPositionWordImage_i = function () {
		var t = new eui.Image();
		this.rightYourPositionWordImage = t;
		t.bottom = 130;
		t.right = 150;
		return t;
	};
	_proto.rightSignImage_i = function () {
		var t = new eui.Image();
		this.rightSignImage = t;
		t.right = 245;
		t.source = "UI_Start_Location2_png";
		t.y = 90;
		return t;
	};
	_proto.rightCircleImage_i = function () {
		var t = new eui.Image();
		this.rightCircleImage = t;
		t.anchorOffsetX = 93;
		t.anchorOffsetY = 95;
		t.source = "UI_Start_Line5_png";
		t.x = 269;
		t.y = 223;
		return t;
	};
	_proto.guideGroup_i = function () {
		var t = new eui.Group();
		this.guideGroup = t;
		t.height = 540;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 960;
		t.elementsContent = [this.menuImage_i(),this.lockImage_i(),this.autoImage_i(),this.menuLineGroup_i(),this.menuLineMaskGroup_i(),this.lockLineGroup_i(),this.lockLineMaskGroup_i(),this.autoLineGroup_i(),this.autoLineMaskGroup_i()];
		return t;
	};
	_proto.menuImage_i = function () {
		var t = new eui.Image();
		this.menuImage = t;
		t.left = 60;
		t.verticalCenter = -30;
		return t;
	};
	_proto.lockImage_i = function () {
		var t = new eui.Image();
		this.lockImage = t;
		t.right = 285;
		t.verticalCenter = -30;
		t.y = 136;
		return t;
	};
	_proto.autoImage_i = function () {
		var t = new eui.Image();
		this.autoImage = t;
		t.left = 285;
		t.verticalCenter = -30;
		return t;
	};
	_proto.menuLineGroup_i = function () {
		var t = new eui.Group();
		this.menuLineGroup = t;
		t.left = 8;
		t.scrollEnabled = false;
		t.verticalCenter = 0;
		t.width = 210;
		t.elementsContent = [this.menuLine1Image_i(),this.menuLine2Image_i(),this.menuLine5Image_i()];
		return t;
	};
	_proto.menuLine1Image_i = function () {
		var t = new eui.Image();
		this.menuLine1Image = t;
		t.left = 0;
		t.rotation = 90;
		t.source = "UI_Start_Line1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.menuLine2Image_i = function () {
		var t = new eui.Image();
		this.menuLine2Image = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 9.5;
		t.scale9Grid = new egret.Rectangle(3,0,2,0);
		t.source = "UI_Start_Line2_png";
		t.verticalCenter = 0;
		t.width = 125;
		return t;
	};
	_proto.menuLine5Image_i = function () {
		var t = new eui.Image();
		this.menuLine5Image = t;
		t.anchorOffsetX = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = -1;
		t.source = "UI_Start_Line3_png";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto.menuLineMaskGroup_i = function () {
		var t = new eui.Image();
		this.menuLineMaskGroup = t;
		t.alpha = 1;
		t.height = 60;
		t.source = "GP_Mask_png";
		t.verticalCenter = 0;
		t.width = 0;
		t.x = 20;
		return t;
	};
	_proto.lockLineGroup_i = function () {
		var t = new eui.Group();
		this.lockLineGroup = t;
		t.bottom = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scrollEnabled = false;
		t.width = 500;
		t.elementsContent = [this.lockLine1Image_i(),this.lockLine2Image_i(),this.lockLine3Image_i(),this.lockLine4Image_i(),this.lockLine5Image_i()];
		return t;
	};
	_proto.lockLine1Image_i = function () {
		var t = new eui.Image();
		this.lockLine1Image = t;
		t.bottom = 10;
		t.horizontalCenter = 45;
		t.source = "UI_Start_Line1_png";
		t.width = 56;
		return t;
	};
	_proto.lockLine2Image_i = function () {
		var t = new eui.Image();
		this.lockLine2Image = t;
		t.bottom = 62;
		t.horizontalCenter = 45;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(3,0,2,0);
		t.source = "UI_Start_Line2_png";
		t.width = 178;
		return t;
	};
	_proto.lockLine3Image_i = function () {
		var t = new eui.Image();
		this.lockLine3Image = t;
		t.bottom = 240;
		t.horizontalCenter = 46.5;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleY = -1;
		t.source = "UI_Start_Line4_png";
		return t;
	};
	_proto.lockLine4Image_i = function () {
		var t = new eui.Image();
		this.lockLine4Image = t;
		t.bottom = 250;
		t.horizontalCenter = 122;
		t.scale9Grid = new egret.Rectangle(3,0,2,0);
		t.source = "UI_Start_Line2_png";
		t.width = 104;
		return t;
	};
	_proto.lockLine5Image_i = function () {
		var t = new eui.Image();
		this.lockLine5Image = t;
		t.bottom = 250;
		t.horizontalCenter = 190.5;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = -1;
		t.source = "UI_Start_Line3_png";
		return t;
	};
	_proto.lockLineMaskGroup_i = function () {
		var t = new eui.Image();
		this.lockLineMaskGroup = t;
		t.bottom = 0;
		t.height = 10;
		t.horizontalCenter = 0;
		t.source = "GP_Mask_png";
		t.width = 120;
		return t;
	};
	_proto.autoLineGroup_i = function () {
		var t = new eui.Group();
		this.autoLineGroup = t;
		t.bottom = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scaleX = -1;
		t.scrollEnabled = false;
		t.width = 500;
		t.elementsContent = [this.autoLine1Image_i(),this.autoLine2Image_i(),this.autoLine3Image_i(),this.autoLine4Image_i(),this.autoLine5Image_i()];
		return t;
	};
	_proto.autoLine1Image_i = function () {
		var t = new eui.Image();
		this.autoLine1Image = t;
		t.bottom = 10;
		t.horizontalCenter = 45;
		t.source = "UI_Start_Line1_png";
		return t;
	};
	_proto.autoLine2Image_i = function () {
		var t = new eui.Image();
		this.autoLine2Image = t;
		t.bottom = 62;
		t.horizontalCenter = 45;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(3,0,2,0);
		t.source = "UI_Start_Line2_png";
		t.width = 178;
		return t;
	};
	_proto.autoLine3Image_i = function () {
		var t = new eui.Image();
		this.autoLine3Image = t;
		t.bottom = 240;
		t.horizontalCenter = 46.5;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleY = -1;
		t.source = "UI_Start_Line4_png";
		return t;
	};
	_proto.autoLine4Image_i = function () {
		var t = new eui.Image();
		this.autoLine4Image = t;
		t.bottom = 250;
		t.horizontalCenter = 122;
		t.scale9Grid = new egret.Rectangle(3,0,2,0);
		t.source = "UI_Start_Line2_png";
		t.width = 104;
		return t;
	};
	_proto.autoLine5Image_i = function () {
		var t = new eui.Image();
		this.autoLine5Image = t;
		t.bottom = 250;
		t.horizontalCenter = 190.5;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = -1;
		t.source = "UI_Start_Line3_png";
		return t;
	};
	_proto.autoLineMaskGroup_i = function () {
		var t = new eui.Image();
		this.autoLineMaskGroup = t;
		t.bottom = 0;
		t.height = 0;
		t.horizontalCenter = 0;
		t.source = "GP_Mask_png";
		t.width = 120;
		return t;
	};
	return GuideBattleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/HelpButtonIRSkin.exml'] = window.Fish.HelpButtonIRSkin = (function (_super) {
	__extends(HelpButtonIRSkin, _super);
	var HelpButtonIRSkin$Skin5 = 	(function (_super) {
		__extends(HelpButtonIRSkin$Skin5, _super);
		function HelpButtonIRSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HelpButtonIRSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HelpButtonIRSkin$Skin5;
	})(eui.Skin);

	function HelpButtonIRSkin() {
		_super.call(this);
		this.skinParts = ["helpButton","titleImageNoSelect","titleImageSelect"];
		
		this.height = 65;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.currentState"],[0],this,"currentState");
		eui.Binding.$bindProperties(this, ["hostComponent.data.noSelectImage"],[0],this.titleImageNoSelect,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.selectImage"],[0],this.titleImageSelect,"source");
	}
	var _proto = HelpButtonIRSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.helpButton_i(),this.titleImageNoSelect_i(),this.titleImageSelect_i()];
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new eui.Button();
		this.helpButton = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.skinName = HelpButtonIRSkin$Skin5;
		return t;
	};
	_proto.titleImageNoSelect_i = function () {
		var t = new eui.Image();
		this.titleImageNoSelect = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.titleImageSelect_i = function () {
		var t = new eui.Image();
		this.titleImageSelect = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return HelpButtonIRSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/HelpGameFeatureSkin.exml'] = window.Fish.HelpGameFeatureSkin = (function (_super) {
	__extends(HelpGameFeatureSkin, _super);
	function HelpGameFeatureSkin() {
		_super.call(this);
		this.skinParts = ["titleByCaiShenFaFaFaImage","InstructionsByCaiShenFaFaFaImage","iconByCaiShenFaFaFaImage","titleByWheelOfFortuneDrillImage","InstructionsByWheelOfFortuneImage","iconByWheelOfFortuneImage","titleByCaiShenImage","InstructionsByCaiShenImage","iconByCaiShenImage","titleByAutomaticBazookaImage","InstructionsByAutomaticBazookaImage","iconByAutomaticBazookaImage","titleByMegaDrillImage","InstructionsByMegaDrillImage","iconByMegaDrillImage","helpViewStack","previousButton","nextButton","pageLabel"];
		
		this.height = 380;
		this.width = 600;
		this.elementsContent = [this.helpViewStack_i(),this._Group6_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("titleByCaiShenFaFaFaImage","source","UI_Help_GameFeature2_01_tw_png"),
					new eui.SetProperty("InstructionsByCaiShenFaFaFaImage","source","UI_Help_GameFeature2_03_tw_png"),
					new eui.SetProperty("_Image1","source","UI_Help_GameFeature2_04_tw_png"),
					new eui.SetProperty("titleByWheelOfFortuneDrillImage","source","UI_Help_GameFeature6_01_tw_png"),
					new eui.SetProperty("InstructionsByWheelOfFortuneImage","source","UI_Help_GameFeature6_03_tw_png"),
					new eui.SetProperty("_Image2","source","UI_Help_GameFeature6_04_tw_png"),
					new eui.SetProperty("titleByCaiShenImage","source","UI_Help_GameFeature3_01_tw_png"),
					new eui.SetProperty("InstructionsByCaiShenImage","source","UI_Help_GameFeature3_03_tw_png"),
					new eui.SetProperty("titleByAutomaticBazookaImage","source","UI_Help_GameFeature4_01_tw_png"),
					new eui.SetProperty("InstructionsByAutomaticBazookaImage","source","UI_Help_GameFeature4_03_tw_png"),
					new eui.SetProperty("_Image3","source","UI_Help_GameFeature4_04_tw_png"),
					new eui.SetProperty("titleByMegaDrillImage","source","UI_Help_GameFeature4_01_tw_png"),
					new eui.SetProperty("InstructionsByMegaDrillImage","source","UI_Help_GameFeature5_03_tw_png"),
					new eui.SetProperty("_Image4","source","UI_Help_GameFeature5_04_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("titleByCaiShenFaFaFaImage","source","UI_Help_GameFeature2_01_cn_png"),
					new eui.SetProperty("InstructionsByCaiShenFaFaFaImage","source","UI_Help_GameFeature2_03_cn_png"),
					new eui.SetProperty("_Image1","source","UI_Help_GameFeature2_04_cn_png"),
					new eui.SetProperty("titleByWheelOfFortuneDrillImage","source","UI_Help_GameFeature6_01_cn_png"),
					new eui.SetProperty("InstructionsByWheelOfFortuneImage","source","UI_Help_GameFeature6_03_cn_png"),
					new eui.SetProperty("_Image2","source","UI_Help_GameFeature6_04_cn_png"),
					new eui.SetProperty("titleByCaiShenImage","source","UI_Help_GameFeature3_01_cn_png"),
					new eui.SetProperty("InstructionsByCaiShenImage","source","UI_Help_GameFeature3_03_cn_png"),
					new eui.SetProperty("titleByAutomaticBazookaImage","source","UI_Help_GameFeature4_01_cn_png"),
					new eui.SetProperty("InstructionsByAutomaticBazookaImage","source","UI_Help_GameFeature4_03_cn_png"),
					new eui.SetProperty("_Image3","source","UI_Help_GameFeature4_04_cn_png"),
					new eui.SetProperty("titleByMegaDrillImage","source","UI_Help_GameFeature4_01_cn_png"),
					new eui.SetProperty("InstructionsByMegaDrillImage","source","UI_Help_GameFeature5_03_cn_png"),
					new eui.SetProperty("_Image4","source","UI_Help_GameFeature5_04_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("titleByCaiShenFaFaFaImage","source","UI_Help_GameFeature2_01_en_png"),
					new eui.SetProperty("InstructionsByCaiShenFaFaFaImage","source","UI_Help_GameFeature2_03_en_png"),
					new eui.SetProperty("InstructionsByCaiShenFaFaFaImage","left",170),
					new eui.SetProperty("InstructionsByCaiShenFaFaFaImage","y",103),
					new eui.SetProperty("_Image1","source","UI_Help_GameFeature2_04_en_png"),
					new eui.SetProperty("titleByWheelOfFortuneDrillImage","source","UI_Help_GameFeature6_01_en_png"),
					new eui.SetProperty("InstructionsByWheelOfFortuneImage","source","UI_Help_GameFeature6_03_en_png"),
					new eui.SetProperty("InstructionsByWheelOfFortuneImage","left",170),
					new eui.SetProperty("InstructionsByWheelOfFortuneImage","y",97),
					new eui.SetProperty("_Image2","source","UI_Help_GameFeature6_04_en_png"),
					new eui.SetProperty("titleByCaiShenImage","source","UI_Help_GameFeature3_01_en_png"),
					new eui.SetProperty("InstructionsByCaiShenImage","source","UI_Help_GameFeature3_03_en_png"),
					new eui.SetProperty("titleByAutomaticBazookaImage","source","UI_Help_GameFeature4_01_en_png"),
					new eui.SetProperty("InstructionsByAutomaticBazookaImage","source","UI_Help_GameFeature4_03_en_png"),
					new eui.SetProperty("InstructionsByAutomaticBazookaImage","left",170),
					new eui.SetProperty("InstructionsByAutomaticBazookaImage","y",67),
					new eui.SetProperty("_Image3","source","UI_Help_GameFeature4_04_en_png"),
					new eui.SetProperty("titleByMegaDrillImage","source","UI_Help_GameFeature4_01_en_png"),
					new eui.SetProperty("InstructionsByMegaDrillImage","source","UI_Help_GameFeature5_03_en_png"),
					new eui.SetProperty("InstructionsByMegaDrillImage","left",170),
					new eui.SetProperty("InstructionsByMegaDrillImage","y",67),
					new eui.SetProperty("_Image4","source","UI_Help_GameFeature5_04_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("titleByCaiShenFaFaFaImage","source","UI_Help_GameFeature2_01_th_png"),
					new eui.SetProperty("InstructionsByCaiShenFaFaFaImage","source","UI_Help_GameFeature2_03_th_png"),
					new eui.SetProperty("InstructionsByCaiShenFaFaFaImage","left",170),
					new eui.SetProperty("InstructionsByCaiShenFaFaFaImage","y",103),
					new eui.SetProperty("_Image1","source","UI_Help_GameFeature2_04_th_png"),
					new eui.SetProperty("titleByWheelOfFortuneDrillImage","source","UI_Help_GameFeature6_01_th_png"),
					new eui.SetProperty("InstructionsByWheelOfFortuneImage","source","UI_Help_GameFeature6_03_th_png"),
					new eui.SetProperty("InstructionsByWheelOfFortuneImage","left",170),
					new eui.SetProperty("InstructionsByWheelOfFortuneImage","y",97),
					new eui.SetProperty("_Image2","source","UI_Help_GameFeature6_04_th_png"),
					new eui.SetProperty("titleByCaiShenImage","source","UI_Help_GameFeature3_01_th_png"),
					new eui.SetProperty("InstructionsByCaiShenImage","source","UI_Help_GameFeature3_03_th_png"),
					new eui.SetProperty("titleByAutomaticBazookaImage","source","UI_Help_GameFeature4_01_th_png"),
					new eui.SetProperty("InstructionsByAutomaticBazookaImage","source","UI_Help_GameFeature4_03_th_png"),
					new eui.SetProperty("InstructionsByAutomaticBazookaImage","left",170),
					new eui.SetProperty("InstructionsByAutomaticBazookaImage","y",67),
					new eui.SetProperty("_Image3","source","UI_Help_GameFeature4_04_th_png"),
					new eui.SetProperty("titleByMegaDrillImage","source","UI_Help_GameFeature4_01_th_png"),
					new eui.SetProperty("InstructionsByMegaDrillImage","source","UI_Help_GameFeature5_03_th_png"),
					new eui.SetProperty("InstructionsByMegaDrillImage","left",170),
					new eui.SetProperty("InstructionsByMegaDrillImage","y",67),
					new eui.SetProperty("_Image4","source","UI_Help_GameFeature5_04_th_png")
				])
		];
	}
	var _proto = HelpGameFeatureSkin.prototype;

	_proto.helpViewStack_i = function () {
		var t = new eui.ViewStack();
		this.helpViewStack = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.titleByCaiShenFaFaFaImage_i(),this.InstructionsByCaiShenFaFaFaImage_i(),this.iconByCaiShenFaFaFaImage_i(),this._Image1_i()];
		return t;
	};
	_proto.titleByCaiShenFaFaFaImage_i = function () {
		var t = new eui.Image();
		this.titleByCaiShenFaFaFaImage = t;
		t.left = 20;
		t.top = 20;
		return t;
	};
	_proto.InstructionsByCaiShenFaFaFaImage_i = function () {
		var t = new eui.Image();
		this.InstructionsByCaiShenFaFaFaImage = t;
		t.left = 170;
		t.y = 96;
		return t;
	};
	_proto.iconByCaiShenFaFaFaImage_i = function () {
		var t = new eui.Image();
		this.iconByCaiShenFaFaFaImage = t;
		t.left = 0;
		t.source = "UI_Help_GameFeature2_02_png";
		t.verticalCenter = -20;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 60;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "View";
		t.percentWidth = 100;
		t.elementsContent = [this.titleByWheelOfFortuneDrillImage_i(),this.InstructionsByWheelOfFortuneImage_i(),this.iconByWheelOfFortuneImage_i(),this._Image2_i()];
		return t;
	};
	_proto.titleByWheelOfFortuneDrillImage_i = function () {
		var t = new eui.Image();
		this.titleByWheelOfFortuneDrillImage = t;
		t.left = 20;
		t.top = 20;
		return t;
	};
	_proto.InstructionsByWheelOfFortuneImage_i = function () {
		var t = new eui.Image();
		this.InstructionsByWheelOfFortuneImage = t;
		t.left = 170;
		t.y = 100;
		return t;
	};
	_proto.iconByWheelOfFortuneImage_i = function () {
		var t = new eui.Image();
		this.iconByWheelOfFortuneImage = t;
		t.left = 30;
		t.source = "UI_Help_GameFeature6_02_png";
		t.verticalCenter = -20;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 60;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "View";
		t.percentWidth = 100;
		t.elementsContent = [this.titleByCaiShenImage_i(),this.InstructionsByCaiShenImage_i(),this.iconByCaiShenImage_i()];
		return t;
	};
	_proto.titleByCaiShenImage_i = function () {
		var t = new eui.Image();
		this.titleByCaiShenImage = t;
		t.left = 20;
		t.top = 20;
		return t;
	};
	_proto.InstructionsByCaiShenImage_i = function () {
		var t = new eui.Image();
		this.InstructionsByCaiShenImage = t;
		t.left = 170;
		t.y = 105;
		return t;
	};
	_proto.iconByCaiShenImage_i = function () {
		var t = new eui.Image();
		this.iconByCaiShenImage = t;
		t.left = 0;
		t.source = "UI_Help_GameFeature3_02_png";
		t.verticalCenter = -20;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "View";
		t.percentWidth = 100;
		t.elementsContent = [this.titleByAutomaticBazookaImage_i(),this.InstructionsByAutomaticBazookaImage_i(),this.iconByAutomaticBazookaImage_i(),this._Image3_i()];
		return t;
	};
	_proto.titleByAutomaticBazookaImage_i = function () {
		var t = new eui.Image();
		this.titleByAutomaticBazookaImage = t;
		t.left = 20;
		t.top = 20;
		return t;
	};
	_proto.InstructionsByAutomaticBazookaImage_i = function () {
		var t = new eui.Image();
		this.InstructionsByAutomaticBazookaImage = t;
		t.left = 170;
		t.y = 58;
		return t;
	};
	_proto.iconByAutomaticBazookaImage_i = function () {
		var t = new eui.Image();
		this.iconByAutomaticBazookaImage = t;
		t.left = 0;
		t.source = "UI_Help_GameFeature4_02_png";
		t.verticalCenter = -20;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.bottom = 60;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "View";
		t.percentWidth = 100;
		t.elementsContent = [this.titleByMegaDrillImage_i(),this.InstructionsByMegaDrillImage_i(),this.iconByMegaDrillImage_i(),this._Image4_i()];
		return t;
	};
	_proto.titleByMegaDrillImage_i = function () {
		var t = new eui.Image();
		this.titleByMegaDrillImage = t;
		t.left = 20;
		t.top = 20;
		return t;
	};
	_proto.InstructionsByMegaDrillImage_i = function () {
		var t = new eui.Image();
		this.InstructionsByMegaDrillImage = t;
		t.left = 170;
		t.y = 58;
		return t;
	};
	_proto.iconByMegaDrillImage_i = function () {
		var t = new eui.Image();
		this.iconByMegaDrillImage = t;
		t.left = 0;
		t.source = "UI_Help_GameFeature5_02_png";
		t.verticalCenter = -20;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.bottom = 60;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image5_i(),this.previousButton_i(),this.nextButton_i(),this.pageLabel_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_Help_Board02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.previousButton_i = function () {
		var t = new eui.Image();
		this.previousButton = t;
		t.horizontalCenter = -80;
		t.source = "UI_Help_Next_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.nextButton_i = function () {
		var t = new eui.Image();
		this.nextButton = t;
		t.horizontalCenter = 80;
		t.rotation = 180;
		t.source = "UI_Help_Next_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.pageLabel_i = function () {
		var t = new eui.Label();
		this.pageLabel = t;
		t.bold = true;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "4/4";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	return HelpGameFeatureSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/HelpGameRuleSkin.exml'] = window.Fish.HelpGameRuleSkin = (function (_super) {
	__extends(HelpGameRuleSkin, _super);
	function HelpGameRuleSkin() {
		_super.call(this);
		this.skinParts = ["helpViewStack","previousButton","nextButton","pageLabel"];
		
		this.height = 380;
		this.width = 600;
		this.elementsContent = [this.helpViewStack_i(),this._Group2_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("_Image1","source","UI_Help_Game-Rule3_01_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("_Image1","source","UI_Help_Game-Rule3_01_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("_Image1","source","UI_Help_Game-Rule3_01_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("_Image1","source","UI_Help_Game-Rule3_01_th_png")
				])
		];
	}
	var _proto = HelpGameRuleSkin.prototype;

	_proto.helpViewStack_i = function () {
		var t = new eui.ViewStack();
		this.helpViewStack = t;
		t.percentHeight = 100;
		t.selectedIndex = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.previousButton_i(),this.nextButton_i(),this.pageLabel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_Help_Board02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.previousButton_i = function () {
		var t = new eui.Image();
		this.previousButton = t;
		t.horizontalCenter = -80;
		t.source = "UI_Help_Next_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.nextButton_i = function () {
		var t = new eui.Image();
		this.nextButton = t;
		t.horizontalCenter = 80;
		t.rotation = 180;
		t.source = "UI_Help_Next_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.pageLabel_i = function () {
		var t = new eui.Label();
		this.pageLabel = t;
		t.bold = true;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "4/4";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	return HelpGameRuleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/HelpPayTableSkin.exml'] = window.Fish.helpPayTableSkin = (function (_super) {
	__extends(helpPayTableSkin, _super);
	function helpPayTableSkin() {
		_super.call(this);
		this.skinParts = ["value_0","value_1","value_2","value_3","value_4","value_5","value_6","value_7","value_8","value_9","value_10","value_11","value_12","value_13","value_14","value_15","value_16","value_17","value_18","value_19","value_200","value_201","value_100","value_101","titleByCaiShenFaFaFaImage","iconByCaiShenFaFaFaImage","titleByWheelOfFortuneImage","iconByWheelOfFortuneImage","helpViewStack","previousButton","nextButton","pageLabel"];
		
		this.height = 380;
		this.width = 600;
		this.elementsContent = [this.helpViewStack_i(),this._Group14_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("_Image2","source","UI_Help_PayTable2_04_tw_png"),
					new eui.SetProperty("_Image4","source","UI_Help_PayTable2_04_tw_png"),
					new eui.SetProperty("_Image6","source","UI_Help_PayTable2_04_tw_png"),
					new eui.SetProperty("_Image8","source","UI_Help_PayTable2_04_tw_png"),
					new eui.SetProperty("titleByCaiShenFaFaFaImage","source","UI_Help_PayTable3_01_tw_png"),
					new eui.SetProperty("_Image9","source","UI_Help_PayTable3_03_tw_png"),
					new eui.SetProperty("titleByWheelOfFortuneImage","source","UI_Help_PayTable4_01_tw_png"),
					new eui.SetProperty("_Image10","source","UI_Help_PayTable4_03_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("_Image2","source","UI_Help_PayTable2_04_cn_png"),
					new eui.SetProperty("_Image4","source","UI_Help_PayTable2_04_cn_png"),
					new eui.SetProperty("_Image6","source","UI_Help_PayTable2_04_cn_png"),
					new eui.SetProperty("_Image8","source","UI_Help_PayTable2_04_cn_png"),
					new eui.SetProperty("titleByCaiShenFaFaFaImage","source","UI_Help_PayTable3_01_cn_png"),
					new eui.SetProperty("_Image9","source","UI_Help_PayTable3_03_cn_png"),
					new eui.SetProperty("titleByWheelOfFortuneImage","source","UI_Help_PayTable4_01_cn_png"),
					new eui.SetProperty("_Image10","source","UI_Help_PayTable4_03_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("_Image2","source","UI_Help_PayTable2_04_en_png"),
					new eui.SetProperty("_Image2","horizontalCenter",0.5),
					new eui.SetProperty("_Image2","bottom",61),
					new eui.SetProperty("_Image4","source","UI_Help_PayTable2_04_en_png"),
					new eui.SetProperty("_Image4","horizontalCenter",0.5),
					new eui.SetProperty("_Image4","bottom",61),
					new eui.SetProperty("_Image6","source","UI_Help_PayTable2_04_en_png"),
					new eui.SetProperty("_Image6","horizontalCenter",0.5),
					new eui.SetProperty("_Image6","bottom",61),
					new eui.SetProperty("_Image8","source","UI_Help_PayTable2_04_en_png"),
					new eui.SetProperty("_Image8","horizontalCenter",0.5),
					new eui.SetProperty("_Image8","bottom",61),
					new eui.SetProperty("titleByCaiShenFaFaFaImage","source","UI_Help_PayTable3_01_en_png"),
					new eui.SetProperty("_Image9","source","UI_Help_PayTable3_03_en_png"),
					new eui.SetProperty("titleByWheelOfFortuneImage","source","UI_Help_PayTable4_01_en_png"),
					new eui.SetProperty("_Image10","source","UI_Help_PayTable4_03_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("_Image2","source","UI_Help_PayTable2_04_th_png"),
					new eui.SetProperty("_Image2","horizontalCenter",0.5),
					new eui.SetProperty("_Image2","bottom",61),
					new eui.SetProperty("_Image4","source","UI_Help_PayTable2_04_th_png"),
					new eui.SetProperty("_Image4","horizontalCenter",0.5),
					new eui.SetProperty("_Image4","bottom",61),
					new eui.SetProperty("_Image6","source","UI_Help_PayTable2_04_th_png"),
					new eui.SetProperty("_Image6","horizontalCenter",0.5),
					new eui.SetProperty("_Image6","bottom",61),
					new eui.SetProperty("_Image8","source","UI_Help_PayTable2_04_th_png"),
					new eui.SetProperty("_Image8","horizontalCenter",0.5),
					new eui.SetProperty("_Image8","bottom",61),
					new eui.SetProperty("titleByCaiShenFaFaFaImage","source","UI_Help_PayTable3_01_th_png"),
					new eui.SetProperty("_Image9","source","UI_Help_PayTable3_03_th_png"),
					new eui.SetProperty("titleByWheelOfFortuneImage","source","UI_Help_PayTable4_01_th_png"),
					new eui.SetProperty("_Image10","source","UI_Help_PayTable4_03_th_png")
				])
		];
	}
	var _proto = helpPayTableSkin.prototype;

	_proto.helpViewStack_i = function () {
		var t = new eui.ViewStack();
		this.helpViewStack = t;
		t.percentHeight = 100;
		t.selectedIndex = 3;
		t.percentWidth = 100;
		t.elementsContent = [this._Group3_i(),this._Group6_i(),this._Group9_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_Help_PayTable2_01_png";
		t.top = -30;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 90;
		t.y = 75;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.value_0_i(),this.value_1_i(),this.value_2_i(),this.value_3_i(),this.value_4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -6;
		t.paddingLeft = -75;
		return t;
	};
	_proto.value_0_i = function () {
		var t = new eui.BitmapLabel();
		this.value_0 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = -221;
		t.letterSpacing = -18;
		t.text = "2X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_1_i = function () {
		var t = new eui.BitmapLabel();
		this.value_1 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = -119;
		t.letterSpacing = -18;
		t.text = "2X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_2_i = function () {
		var t = new eui.BitmapLabel();
		this.value_2 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 59;
		t.letterSpacing = -18;
		t.text = "3X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_3_i = function () {
		var t = new eui.BitmapLabel();
		this.value_3 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 200;
		t.letterSpacing = -18;
		t.text = "4X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_4_i = function () {
		var t = new eui.BitmapLabel();
		this.value_4 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 314;
		t.letterSpacing = -18;
		t.text = "5X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 90;
		t.y = 245;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.value_5_i(),this.value_6_i(),this.value_7_i(),this.value_8_i(),this.value_9_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -6;
		t.paddingLeft = -75;
		return t;
	};
	_proto.value_5_i = function () {
		var t = new eui.BitmapLabel();
		this.value_5 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 314;
		t.letterSpacing = -18;
		t.text = "6X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_6_i = function () {
		var t = new eui.BitmapLabel();
		this.value_6 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 200;
		t.letterSpacing = -18;
		t.text = "7X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_7_i = function () {
		var t = new eui.BitmapLabel();
		this.value_7 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 59;
		t.letterSpacing = -18;
		t.text = "8X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_8_i = function () {
		var t = new eui.BitmapLabel();
		this.value_8 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = -119;
		t.letterSpacing = -18;
		t.text = "9X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_9_i = function () {
		var t = new eui.BitmapLabel();
		this.value_9 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = -221;
		t.letterSpacing = -18;
		t.text = "10X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 70;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image3_i(),this._Group4_i(),this._Group5_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_Help_PayTable2_02_png";
		t.top = -30;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 90;
		t.y = 75;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.value_10_i(),this.value_11_i(),this.value_12_i(),this.value_13_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.paddingLeft = -50;
		return t;
	};
	_proto.value_10_i = function () {
		var t = new eui.BitmapLabel();
		this.value_10 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 314;
		t.letterSpacing = -18;
		t.text = "12X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_11_i = function () {
		var t = new eui.BitmapLabel();
		this.value_11 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 200;
		t.letterSpacing = -18;
		t.text = "15X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_12_i = function () {
		var t = new eui.BitmapLabel();
		this.value_12 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 59;
		t.letterSpacing = -18;
		t.text = "18X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_13_i = function () {
		var t = new eui.BitmapLabel();
		this.value_13 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = -119;
		t.letterSpacing = -18;
		t.text = "20X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 90;
		t.y = 245;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.value_14_i(),this.value_15_i(),this.value_16_i(),this.value_17_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.paddingLeft = -50;
		return t;
	};
	_proto.value_14_i = function () {
		var t = new eui.BitmapLabel();
		this.value_14 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 314;
		t.letterSpacing = -18;
		t.text = "25X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_15_i = function () {
		var t = new eui.BitmapLabel();
		this.value_15 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 200;
		t.letterSpacing = -18;
		t.text = "30X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_16_i = function () {
		var t = new eui.BitmapLabel();
		this.value_16 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 59;
		t.letterSpacing = -18;
		t.text = "40X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.value_17_i = function () {
		var t = new eui.BitmapLabel();
		this.value_17 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = -119;
		t.letterSpacing = -18;
		t.text = "50X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.bottom = 70;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image5_i(),this._Group7_i(),this._Group8_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_Help_PayTable2_03_png";
		t.top = -30;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 90;
		t.y = 110;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this.value_18_i(),this.value_19_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.paddingLeft = -20;
		return t;
	};
	_proto.value_18_i = function () {
		var t = new eui.BitmapLabel();
		this.value_18 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 314;
		t.letterSpacing = -18;
		t.text = "80X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.value_19_i = function () {
		var t = new eui.BitmapLabel();
		this.value_19 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 200;
		t.letterSpacing = -18;
		t.text = "100X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 90;
		t.y = 245;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this.value_200_i(),this.value_201_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.paddingLeft = -20;
		return t;
	};
	_proto.value_200_i = function () {
		var t = new eui.BitmapLabel();
		this.value_200 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 314;
		t.letterSpacing = -18;
		t.text = "10X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.value_201_i = function () {
		var t = new eui.BitmapLabel();
		this.value_201 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 200;
		t.letterSpacing = -18;
		t.text = "10X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.bottom = 70;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image7_i(),this._Group10_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_Help_PayTable2_04_png";
		t.top = -40;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 90;
		t.y = 230;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this.value_100_i(),this.value_101_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -30;
		t.paddingLeft = -76;
		return t;
	};
	_proto.value_100_i = function () {
		var t = new eui.BitmapLabel();
		this.value_100 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 314;
		t.letterSpacing = -18;
		t.text = "50X~150X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto.value_101_i = function () {
		var t = new eui.BitmapLabel();
		this.value_101 = t;
		t.font = "UI_Help_Num_fnt";
		t.horizontalCenter = 200;
		t.letterSpacing = -18;
		t.text = "100X~300X";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.bottom = 70;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.titleByCaiShenFaFaFaImage_i(),this.iconByCaiShenFaFaFaImage_i(),this._Image9_i()];
		return t;
	};
	_proto.titleByCaiShenFaFaFaImage_i = function () {
		var t = new eui.Image();
		this.titleByCaiShenFaFaFaImage = t;
		t.left = 20;
		t.top = 20;
		return t;
	};
	_proto.iconByCaiShenFaFaFaImage_i = function () {
		var t = new eui.Image();
		this.iconByCaiShenFaFaFaImage = t;
		t.left = 30;
		t.source = "UI_Help_PayTable3_02_png";
		t.verticalCenter = -40;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.left = 200;
		t.top = 85;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.titleByWheelOfFortuneImage_i(),this.iconByWheelOfFortuneImage_i(),this._Image10_i()];
		return t;
	};
	_proto.titleByWheelOfFortuneImage_i = function () {
		var t = new eui.Image();
		this.titleByWheelOfFortuneImage = t;
		t.left = 20;
		t.top = 20;
		return t;
	};
	_proto.iconByWheelOfFortuneImage_i = function () {
		var t = new eui.Image();
		this.iconByWheelOfFortuneImage = t;
		t.left = 30;
		t.source = "UI_Help_PayTable4_02_png";
		t.verticalCenter = -40;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		this._Image10 = t;
		t.left = 200;
		t.top = 85;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image11_i(),this.previousButton_i(),this.nextButton_i(),this.pageLabel_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_Help_Board02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.previousButton_i = function () {
		var t = new eui.Image();
		this.previousButton = t;
		t.horizontalCenter = -80;
		t.source = "UI_Help_Next_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.nextButton_i = function () {
		var t = new eui.Image();
		this.nextButton = t;
		t.horizontalCenter = 80;
		t.rotation = 180;
		t.source = "UI_Help_Next_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.pageLabel_i = function () {
		var t = new eui.Label();
		this.pageLabel = t;
		t.bold = true;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "4/4";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	return helpPayTableSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/HelpSkin.exml'] = window.Fish.HelpSkin = (function (_super) {
	__extends(HelpSkin, _super);
	var HelpSkin$Skin6 = 	(function (_super) {
		__extends(HelpSkin$Skin6, _super);
		function HelpSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","UI_Help_Off_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","UI_Help_Off_png")
					])
			];
		}
		var _proto = HelpSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "UI_Help_Off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HelpSkin$Skin6;
	})(eui.Skin);

	function HelpSkin() {
		_super.call(this);
		this.skinParts = ["maskImage","helpList","helpPayTableSkinView","helpGameFeatureSkinView","helpUserInterfaceSkinView","playCountLabel","helpGameRuleSkinView","helpViewStack","exitButton"];
		
		this.currentState = "none";
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.maskImage_i(),this._Image1_i(),this._Image2_i(),this._Group8_i(),this.exitButton_i()];
		this.states = [
			new eui.State ("none",
				[
					new eui.SetProperty("exitButton","top",91)
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("_Image2","source","UI_Help_Tip_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("_Image2","source","UI_Help_Tip_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("_Image2","source","UI_Help_Tip_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("_Image2","source","UI_Help_Tip_th_png"),
					new eui.SetProperty("_Image2","left",78)
				])
		];
	}
	var _proto = HelpSkin.prototype;

	_proto.maskImage_i = function () {
		var t = new eui.Image();
		this.maskImage = t;
		t.alpha = 0.5;
		t.height = 540;
		t.name = "maskImage";
		t.source = "GP_Mask_png";
		t.touchEnabled = false;
		t.width = 960;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "UI_Help_Board_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.left = 100;
		t.top = 100;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 450;
		t.horizontalCenter = 0;
		t.width = 825;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group7_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.paddingLeft = 0;
		t.paddingTop = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group2_i(),this.helpViewStack_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 192;
		t.elementsContent = [this.helpList_i()];
		return t;
	};
	_proto.helpList_i = function () {
		var t = new eui.List();
		this.helpList = t;
		t.itemRendererSkinName = Fish.HelpButtonIRSkin;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.paddingTop = 55;
		return t;
	};
	_proto.helpViewStack_i = function () {
		var t = new eui.ViewStack();
		this.helpViewStack = t;
		t.height = 380;
		t.width = 600;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "View";
		t.percentWidth = 100;
		t.elementsContent = [this.helpPayTableSkinView_i()];
		return t;
	};
	_proto.helpPayTableSkinView_i = function () {
		var t = new HelpPayTableSkinView();
		this.helpPayTableSkinView = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "View";
		t.percentWidth = 100;
		t.elementsContent = [this.helpGameFeatureSkinView_i()];
		return t;
	};
	_proto.helpGameFeatureSkinView_i = function () {
		var t = new HelpGameFeatureSkinView();
		this.helpGameFeatureSkinView = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "View";
		t.percentWidth = 100;
		t.elementsContent = [this.helpUserInterfaceSkinView_i(),this.playCountLabel_i()];
		return t;
	};
	_proto.helpUserInterfaceSkinView_i = function () {
		var t = new HelpUserInterfaceSkinView();
		this.helpUserInterfaceSkinView = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.playCountLabel_i = function () {
		var t = new eui.Label();
		this.playCountLabel = t;
		t.alpha = 0.3;
		t.bold = true;
		t.bottom = 80;
		t.size = 8;
		t.text = "v. 8888888";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 50;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "View";
		t.percentWidth = 100;
		t.elementsContent = [this.helpGameRuleSkinView_i()];
		return t;
	};
	_proto.helpGameRuleSkinView_i = function () {
		var t = new HelpGameRuleSkinView();
		this.helpGameRuleSkinView = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Button();
		this.exitButton = t;
		t.right = 65;
		t.top = 89;
		t.touchEnabled = true;
		t.skinName = HelpSkin$Skin6;
		return t;
	};
	return HelpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/HelpUserInterfaceSkin.exml'] = window.Fish.HelpUserInterfaceSkin = (function (_super) {
	__extends(HelpUserInterfaceSkin, _super);
	function HelpUserInterfaceSkin() {
		_super.call(this);
		this.skinParts = ["iconByCaiShenFaFaFaImage","helpViewStack","previousButton","nextButton","pageLabel"];
		
		this.height = 380;
		this.width = 600;
		this.elementsContent = [this.helpViewStack_i(),this._Group2_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("iconByCaiShenFaFaFaImage","source","UI_Help_Info2_01_tw_png"),
					new eui.SetProperty("iconByCaiShenFaFaFaImage","top",20)
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("iconByCaiShenFaFaFaImage","source","UI_Help_Info2_01_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("iconByCaiShenFaFaFaImage","source","UI_Help_Info2_01_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("iconByCaiShenFaFaFaImage","source","UI_Help_Info2_01_th_png")
				])
		];
	}
	var _proto = HelpUserInterfaceSkin.prototype;

	_proto.helpViewStack_i = function () {
		var t = new eui.ViewStack();
		this.helpViewStack = t;
		t.percentHeight = 100;
		t.selectedIndex = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.iconByCaiShenFaFaFaImage_i()];
		return t;
	};
	_proto.iconByCaiShenFaFaFaImage_i = function () {
		var t = new eui.Image();
		this.iconByCaiShenFaFaFaImage = t;
		t.horizontalCenter = 0;
		t.top = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.previousButton_i(),this.nextButton_i(),this.pageLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "UI_Help_Board02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.previousButton_i = function () {
		var t = new eui.Image();
		this.previousButton = t;
		t.horizontalCenter = -80;
		t.source = "UI_Help_Next_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.nextButton_i = function () {
		var t = new eui.Image();
		this.nextButton = t;
		t.horizontalCenter = 80;
		t.rotation = 180;
		t.source = "UI_Help_Next_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.pageLabel_i = function () {
		var t = new eui.Label();
		this.pageLabel = t;
		t.bold = true;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "4/4";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	return HelpUserInterfaceSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/LoadingProgressBarSkin.exml'] = window.Fish.LoadingProgressBarSkin = (function (_super) {
	__extends(LoadingProgressBarSkin, _super);
	function LoadingProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 20;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = LoadingProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,15,25,10);
		t.source = "GP_Loading_Bar_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,11,25,7);
		t.source = "GP_Loading_Bar_02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "1/10";
		t.textAlign = "center";
		t.textColor = 0x262121;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return LoadingProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/LoadingSkin.exml'] = window.Fish.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["bgImage","logoImage","logoTitleImage","msgImage","progressBar"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.bgImage_i(),this.logoImage_i(),this.logoTitleImage_i(),this.msgImage_i(),this._Group1_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("logoTitleImage","source","GP_Loading_Logo_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("logoTitleImage","source","GP_Loading_Logo_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("logoTitleImage","source","GP_Loading_Logo_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("logoTitleImage","source","GP_Loading_Logo_th_png")
				])
		];
	}
	var _proto = LoadingSkin.prototype;

	_proto.bgImage_i = function () {
		var t = new eui.Image();
		this.bgImage = t;
		t.source = "GP_Loading_Background_png";
		return t;
	};
	_proto.logoImage_i = function () {
		var t = new eui.Image();
		this.logoImage = t;
		t.horizontalCenter = 0;
		t.source = "GP_Loading_Logo_png";
		t.verticalCenter = -30;
		return t;
	};
	_proto.logoTitleImage_i = function () {
		var t = new eui.Image();
		this.logoTitleImage = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 95;
		return t;
	};
	_proto.msgImage_i = function () {
		var t = new eui.Image();
		this.msgImage = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 190;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 5;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.percentWidth = 80;
		t.elementsContent = [this.progressBar_i()];
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.ProgressBar();
		this.progressBar = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.skinName = "Fish.LoadingProgressBarSkin";
		t.percentWidth = 100;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/LobbyAutoSkin.exml'] = window.Fish.LobbyAutoSkin = (function (_super) {
	__extends(LobbyAutoSkin, _super);
	function LobbyAutoSkin() {
		_super.call(this);
		this.skinParts = ["zoneList","zoneScroller"];
		
		this.height = 430;
		this.width = 960;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LobbyAutoSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.zoneScroller_i()];
		return t;
	};
	_proto.zoneScroller_i = function () {
		var t = new eui.Scroller();
		this.zoneScroller = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.zoneList_i();
		return t;
	};
	_proto.zoneList_i = function () {
		var t = new eui.List();
		this.zoneList = t;
		t.percentHeight = 100;
		t.scrollEnabled = false;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -15;
		return t;
	};
	return LobbyAutoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/LobbyAutoZoneIRSkin.exml'] = window.Fish.LobbyAutoZoneIRSkin = (function (_super) {
	__extends(LobbyAutoZoneIRSkin, _super);
	var LobbyAutoZoneIRSkin$Skin7 = 	(function (_super) {
		__extends(LobbyAutoZoneIRSkin$Skin7, _super);
		function LobbyAutoZoneIRSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LobbyAutoZoneIRSkin$Skin7.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LobbyAutoZoneIRSkin$Skin7;
	})(eui.Skin);

	function LobbyAutoZoneIRSkin() {
		_super.call(this);
		this.skinParts = ["bgImage","dragonBoneGroup","cloudBGImage","betBGImage","zoneButton","titleImage","betLabel","comingSoonImage","mainGroup"];
		
		this.height = 400;
		this.width = 330;
		this.elementsContent = [this.mainGroup_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.currentState"],[0],this,"currentState");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bgTextureName"],[0],this.bgImage,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.titleTextureName"],[0],this.titleImage,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.betRange"],[0],this.betLabel,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.betRangeVisible"],[0],this.betLabel,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.comingSoonTextureName"],[0],this.comingSoonImage,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.comingSoonVisible"],[0],this.comingSoonImage,"visible");
	}
	var _proto = LobbyAutoZoneIRSkin.prototype;

	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scrollEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.bgImage_i(),this.dragonBoneGroup_i(),this.cloudBGImage_i(),this.betBGImage_i(),this.zoneButton_i(),this.titleImage_i(),this.betLabel_i(),this.comingSoonImage_i()];
		return t;
	};
	_proto.bgImage_i = function () {
		var t = new eui.Image();
		this.bgImage = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.dragonBoneGroup_i = function () {
		var t = new eui.Group();
		this.dragonBoneGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.cloudBGImage_i = function () {
		var t = new eui.Image();
		this.cloudBGImage = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "GP_Lobby_BG_04_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.betBGImage_i = function () {
		var t = new eui.Image();
		this.betBGImage = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "";
		t.touchEnabled = false;
		return t;
	};
	_proto.zoneButton_i = function () {
		var t = new eui.Button();
		this.zoneButton = t;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.percentWidth = 90;
		t.skinName = LobbyAutoZoneIRSkin$Skin7;
		return t;
	};
	_proto.titleImage_i = function () {
		var t = new eui.Image();
		this.titleImage = t;
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.betLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.betLabel = t;
		t.bottom = 13;
		t.font = "UI_Lobby_Bet_Num_fnt";
		t.horizontalCenter = 0;
		return t;
	};
	_proto.comingSoonImage_i = function () {
		var t = new eui.Image();
		this.comingSoonImage = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 165;
		return t;
	};
	return LobbyAutoZoneIRSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/LobbyInfoButtonIRSkin.exml'] = window.Fish.LobbyInfoButtonIRSkin = (function (_super) {
	__extends(LobbyInfoButtonIRSkin, _super);
	var LobbyInfoButtonIRSkin$Skin8 = 	(function (_super) {
		__extends(LobbyInfoButtonIRSkin$Skin8, _super);
		function LobbyInfoButtonIRSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LobbyInfoButtonIRSkin$Skin8.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LobbyInfoButtonIRSkin$Skin8;
	})(eui.Skin);

	function LobbyInfoButtonIRSkin() {
		_super.call(this);
		this.skinParts = ["zoneButton"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.bgImage"],[0],this.zoneButton,"icon");
	}
	var _proto = LobbyInfoButtonIRSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.zoneButton_i()];
		return t;
	};
	_proto.zoneButton_i = function () {
		var t = new eui.Button();
		this.zoneButton = t;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.skinName = LobbyInfoButtonIRSkin$Skin8;
		return t;
	};
	return LobbyInfoButtonIRSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/LobbyInfoSkin.exml'] = window.Fish.LobbyInfoSkin = (function (_super) {
	__extends(LobbyInfoSkin, _super);
	function LobbyInfoSkin() {
		_super.call(this);
		this.skinParts = ["playerNameLabel","playerCreditLabel","userInfoGroup","versionLabel"];
		
		this.height = 115;
		this.width = 960;
		this.elementsContent = [this._Group3_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
				])
			,
			new eui.State ("cn",
				[
				])
			,
			new eui.State ("en",
				[
				])
		];
	}
	var _proto = LobbyInfoSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 3;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.userInfoGroup_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.paddingLeft = 40;
		return t;
	};
	_proto.userInfoGroup_i = function () {
		var t = new eui.Group();
		this.userInfoGroup = t;
		t.percentHeight = 100;
		t.width = 320;
		t.x = 30;
		t.elementsContent = [this._Image1_i(),this.playerNameLabel_i(),this._Image2_i(),this.playerCreditLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 25;
		t.source = "UI_Lobby_UserBoard_png";
		t.y = 4;
		return t;
	};
	_proto.playerNameLabel_i = function () {
		var t = new eui.Label();
		this.playerNameLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "PlayerI00009";
		t.textColor = 0xffffff;
		t.x = 91;
		t.y = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 12;
		t.source = "UI_Lobby_CreditBoard_png";
		return t;
	};
	_proto.playerCreditLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.playerCreditLabel = t;
		t.font = "UI_Lobby_CreditNum_fnt";
		t.text = "100,000,000.00";
		t.textAlign = "right";
		t.width = 400;
		t.x = -18;
		t.y = 53;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.visible = false;
		t.width = 350;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 235;
		t.elementsContent = [this.versionLabel_i()];
		return t;
	};
	_proto.versionLabel_i = function () {
		var t = new eui.Label();
		this.versionLabel = t;
		t.bold = true;
		t.bottom = 2;
		t.right = 5;
		t.size = 18;
		t.text = "ver. 8888888";
		t.textColor = 0xffffff;
		return t;
	};
	return LobbyInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/LobbySkin.exml'] = window.Fish.LobbySkin = (function (_super) {
	__extends(LobbySkin, _super);
	function LobbySkin() {
		_super.call(this);
		this.skinParts = ["bgAnimationView","lobbyAutoSkinView","autoViewGroup","lobbyTypeViewStack","lobbyInfoSkinView"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this._Image1_i(),this.bgAnimationView_i(),this._Group1_i()];
	}
	var _proto = LobbySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 540;
		t.source = "GP_Loading_Background_png";
		t.width = 960;
		return t;
	};
	_proto.bgAnimationView_i = function () {
		var t = new eui.Group();
		this.bgAnimationView = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.source = "GP_Lobby_Item1_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.source = "GP_Lobby_Item2_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.lobbyTypeViewStack_i(),this.lobbyInfoSkinView_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.paddingTop = 0;
		return t;
	};
	_proto.lobbyTypeViewStack_i = function () {
		var t = new eui.ViewStack();
		this.lobbyTypeViewStack = t;
		t.height = 420;
		t.name = "lobbyTypeViewStack";
		t.scrollEnabled = true;
		t.selectedIndex = 1;
		t.percentWidth = 100;
		t.elementsContent = [this.autoViewGroup_i()];
		return t;
	};
	_proto.autoViewGroup_i = function () {
		var t = new eui.Group();
		this.autoViewGroup = t;
		t.percentHeight = 100;
		t.name = "AutoViewGroup";
		t.percentWidth = 100;
		t.elementsContent = [this.lobbyAutoSkinView_i()];
		return t;
	};
	_proto.lobbyAutoSkinView_i = function () {
		var t = new LobbyAutoSkinView();
		this.lobbyAutoSkinView = t;
		t.percentHeight = 100;
		t.name = "lobbyAutoSkinView";
		t.percentWidth = 100;
		return t;
	};
	_proto.lobbyInfoSkinView_i = function () {
		var t = new LobbyInfoSkinView();
		this.lobbyInfoSkinView = t;
		t.name = "lobbyInfoSkinView";
		t.percentWidth = 100;
		return t;
	};
	return LobbySkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/OptionMenuBattleSkin.exml'] = window.Fish.OptionMenuBattleSkin = (function (_super) {
	__extends(OptionMenuBattleSkin, _super);
	var OptionMenuBattleSkin$Skin9 = 	(function (_super) {
		__extends(OptionMenuBattleSkin$Skin9, _super);
		function OptionMenuBattleSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","UI_Menu_01_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","UI_Menu_02_png")
					])
			];
		}
		var _proto = OptionMenuBattleSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "UI_Menu_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionMenuBattleSkin$Skin9;
	})(eui.Skin);

	function OptionMenuBattleSkin() {
		_super.call(this);
		this.skinParts = ["buttonListBGImage","buttonList","buttonGroup","buttonMaskGroup","optionButton"];
		
		this.height = 450;
		this.width = 100;
		this.elementsContent = [this.buttonMaskGroup_i(),this.optionButton_i()];
	}
	var _proto = OptionMenuBattleSkin.prototype;

	_proto.buttonMaskGroup_i = function () {
		var t = new eui.Group();
		this.buttonMaskGroup = t;
		t.height = 250;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 90;
		t.x = -90;
		t.elementsContent = [this.buttonGroup_i()];
		return t;
	};
	_proto.buttonGroup_i = function () {
		var t = new eui.Group();
		this.buttonGroup = t;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.buttonListBGImage_i(),this._Group1_i()];
		return t;
	};
	_proto.buttonListBGImage_i = function () {
		var t = new eui.Image();
		this.buttonListBGImage = t;
		t.height = 250;
		t.horizontalCenter = 0;
		t.name = "buttonListBGImage";
		t.scale9Grid = new egret.Rectangle(11,17,8,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "UI_Menu_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 250;
		t.bottom = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.viewport = this.buttonList_i();
		return t;
	};
	_proto.buttonList_i = function () {
		var t = new eui.List();
		this.buttonList = t;
		t.itemRendererSkinName = Fish.BattleInfoButtonIRSkin;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.paddingBottom = 15;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.optionButton_i = function () {
		var t = new eui.Button();
		this.optionButton = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = OptionMenuBattleSkin$Skin9;
		return t;
	};
	return OptionMenuBattleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/OptionMenuLobbySkin.exml'] = window.Fish.OptionMenuLobbySkin = (function (_super) {
	__extends(OptionMenuLobbySkin, _super);
	var OptionMenuLobbySkin$Skin10 = 	(function (_super) {
		__extends(OptionMenuLobbySkin$Skin10, _super);
		function OptionMenuLobbySkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","UI_Lobby_Menu_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","UI_Lobby_Menu_png")
					])
			];
		}
		var _proto = OptionMenuLobbySkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "UI_Lobby_Menu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionMenuLobbySkin$Skin10;
	})(eui.Skin);

	function OptionMenuLobbySkin() {
		_super.call(this);
		this.skinParts = ["buttonListBGImage","buttonList","buttonGroup","buttonMaskGroup","optionButton"];
		
		this.height = 550;
		this.width = 120;
		this.elementsContent = [this.buttonListBGImage_i(),this.buttonMaskGroup_i(),this.optionButton_i()];
	}
	var _proto = OptionMenuLobbySkin.prototype;

	_proto.buttonListBGImage_i = function () {
		var t = new eui.Image();
		this.buttonListBGImage = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(53,61,2,2);
		t.source = "UI_Lobby_MenuBoard_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.buttonMaskGroup_i = function () {
		var t = new eui.Group();
		this.buttonMaskGroup = t;
		t.bottom = 50;
		t.height = 500;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.elementsContent = [this.buttonGroup_i()];
		return t;
	};
	_proto.buttonGroup_i = function () {
		var t = new eui.Group();
		this.buttonGroup = t;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 500;
		t.bottom = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.viewport = this.buttonList_i();
		return t;
	};
	_proto.buttonList_i = function () {
		var t = new eui.List();
		this.buttonList = t;
		t.itemRendererSkinName = Fish.LobbyInfoButtonIRSkin;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		t.paddingBottom = 55;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.optionButton_i = function () {
		var t = new eui.Button();
		this.optionButton = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = OptionMenuLobbySkin$Skin10;
		return t;
	};
	return OptionMenuLobbySkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/OptionMenuSkin.exml'] = window.Fish.OptionMenuSkin = (function (_super) {
	__extends(OptionMenuSkin, _super);
	function OptionMenuSkin() {
		_super.call(this);
		this.skinParts = ["lobbySkinView","battleSkinView"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OptionMenuSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this.lobbySkinView_i(),this.battleSkinView_i()];
		return t;
	};
	_proto.lobbySkinView_i = function () {
		var t = new OptionMenuLobbySkinView();
		this.lobbySkinView = t;
		t.bottom = 18;
		t.right = 7;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.battleSkinView_i = function () {
		var t = new OptionMenuBattleSkinView();
		this.battleSkinView = t;
		t.x = "0";
		t.y = 45;
		return t;
	};
	return OptionMenuSkin;
})(eui.Skin);generateEUI.paths['resource/eui_fishSkins/TransitionSkin.exml'] = window.Fish.TransitionSkin = (function (_super) {
	__extends(TransitionSkin, _super);
	function TransitionSkin() {
		_super.call(this);
		this.skinParts = ["bgImage","logoImage","logoTitleImage","msgImage","progressBar"];
		
		this.height = 540;
		this.width = 960;
		this.elementsContent = [this.bgImage_i(),this.logoImage_i(),this.logoTitleImage_i(),this.msgImage_i(),this._Group1_i()];
		this.states = [
			new eui.State ("none",
				[
				])
			,
			new eui.State ("tw",
				[
					new eui.SetProperty("logoTitleImage","source","GP_Loading_Logo_tw_png")
				])
			,
			new eui.State ("cn",
				[
					new eui.SetProperty("logoTitleImage","source","GP_Loading_Logo_cn_png")
				])
			,
			new eui.State ("en",
				[
					new eui.SetProperty("logoTitleImage","source","GP_Loading_Logo_en_png")
				])
			,
			new eui.State ("th",
				[
					new eui.SetProperty("logoTitleImage","source","GP_Loading_Logo_th_png")
				])
		];
	}
	var _proto = TransitionSkin.prototype;

	_proto.bgImage_i = function () {
		var t = new eui.Image();
		this.bgImage = t;
		t.source = "GP_Loading_Background_png";
		return t;
	};
	_proto.logoImage_i = function () {
		var t = new eui.Image();
		this.logoImage = t;
		t.horizontalCenter = 0;
		t.source = "GP_Loading_Logo_png";
		t.verticalCenter = -30;
		return t;
	};
	_proto.logoTitleImage_i = function () {
		var t = new eui.Image();
		this.logoTitleImage = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 95;
		return t;
	};
	_proto.msgImage_i = function () {
		var t = new eui.Image();
		this.msgImage = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 190;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 5;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.percentWidth = 80;
		t.elementsContent = [this.progressBar_i()];
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.ProgressBar();
		this.progressBar = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.skinName = "Fish.LoadingProgressBarSkin";
		t.percentWidth = 100;
		return t;
	};
	return TransitionSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);