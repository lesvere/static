/// 文本格式要用unix，shader编译器不支持回车符(\r)，结束一行只能用换行符(\n)
#ifdef FSHIGHPRECISION
precision highp float;
#else
precision mediump float;
#endif
// #include "Lighting.glsl";

varying vec3 c_MarginalColor;

uniform vec4 u_DiffuseColor;
varying vec2 v_DiffuseTexcoord;
uniform sampler2D u_DiffuseTexture;

#if defined(FISH_WATERLIGHT)
uniform sampler2D u_WaterLightTexture;
varying vec3 v_WaterLightTexcoord;
#endif

#if defined(FISH_TOON) || defined(FISH_COLORFUL)
uniform sampler2D u_MapTexture;
varying vec2 v_MapTexcoord;
#endif

void main()
{
	/// 漫反射颜色
	vec4 diffuseColor = texture2D(u_DiffuseTexture, v_DiffuseTexcoord);
#if defined(FISH_TOON)
	diffuseColor *= u_DiffuseColor;
	/// 卡通环境光贴图
	diffuseColor.rgb *= 2.0 * texture2D(u_MapTexture, v_MapTexcoord).rgb;
#elif defined(FISH_COLORFUL)
	/// 彩色贴图
	diffuseColor.rgb = diffuseColor.rgb*0.3 + texture2D(u_MapTexture, v_MapTexcoord).rgb*0.7;
#else
	diffuseColor *= u_DiffuseColor;
#endif

#if defined(FISH_WATERLIGHT)
	/// 水波纹颜色
	diffuseColor.rgb += diffuseColor.rgb * texture2D(u_WaterLightTexture, v_WaterLightTexcoord.xy).rgb * 0.2;
#endif
	// 边缘发光颜色
	diffuseColor.rgb += c_MarginalColor;
	gl_FragColor = diffuseColor;
}