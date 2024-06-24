/// 文本格式要用unix，shader编译器不支持回车符(\r)，结束一行只能用换行符(\n)
#include "Lighting.glsl";
attribute vec4 a_Position;
attribute vec2 a_Texcoord;
attribute vec3 a_Normal;
uniform mat4 u_MvpMatrix;
uniform mat4 u_WorldMat;
uniform vec3 u_CameraPos;
uniform vec3 u_MarginalColor;
varying vec2 v_DiffuseTexcoord;
varying vec3 c_MarginalColor;
#ifdef BONE
attribute vec4 a_BoneIndices;
attribute vec4 a_BoneWeights;
const int c_MaxBoneCount = 24;
uniform mat4 u_Bones[c_MaxBoneCount];
#endif

#if defined(FISH_TOON)
uniform mat4 u_View;
#endif 

#if defined(FISH_TOON) || defined(FISH_COLORFUL)
varying vec2 v_MapTexcoord;
#endif

#if defined(FISH_WATERLIGHT)
varying vec3 v_WaterLightTexcoord;
#endif

void main()
{
#ifdef BONE
	mat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;
	skinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;
	skinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;
	skinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;
	/// 本地坐标
	vec4 position = skinTransform * a_Position;
	/// 世界坐标
	vec3 worldPosition = (u_WorldMat*position).xyz;
	/// 屏幕坐标
	gl_Position = u_MvpMatrix * position;
	mat3 worldMatrix = mat3(u_WorldMat*skinTransform);
#else
	/// 世界坐标
	vec3 worldPosition = (u_WorldMat*a_Position).xyz;
	/// 屏幕坐标
	gl_Position = u_MvpMatrix * a_Position;
	mat3 worldMatrix = mat3(u_WorldMat);
#endif
	gl_Position=remapGLPositionZ(gl_Position);

	vec3 worldNormal = normalize(worldMatrix*a_Normal);
	/// 计算边缘发光颜色
	vec3 toEyeDir = normalize(u_CameraPos-worldPosition);
	float Rim = 1.0 - max(0.0, dot(toEyeDir, worldNormal));
	c_MarginalColor = u_MarginalColor * pow(Rim, 3.0);
	
#if defined(FISH_WATERLIGHT)
	/// 水波纹UV，水波纹颜色强度
	v_WaterLightTexcoord = vec3(0.3*worldPosition.xz, max(0.0, worldNormal.y));
#endif
	/// 漫反射UV
	v_DiffuseTexcoord = a_Texcoord;
#if defined(FISH_TOON)
	vec3 n = normalize(mat3(u_View)*worldNormal);
	n.z += 1.0;
	float m = 2.0 * sqrt(dot(n, n));
	v_MapTexcoord = vec2(n.x / m + 0.5, n.y / m + 0.5);
#elif defined(FISH_COLORFUL)
	 v_MapTexcoord = 0.1*worldPosition.xz ;
#endif
}