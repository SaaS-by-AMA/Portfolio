declare module 'postprocessing' {
	export class EffectComposer { constructor(renderer?: any); addPass(...args: any[]): any; setSize(width: number, height: number): void; render(dt?: number): void; dispose(): void; }
	export class RenderPass { constructor(scene?: any, camera?: any); }
	export class EffectPass { renderToScreen: any; constructor(...args: any[]); }
	export class BloomEffect { blendMode: any; constructor(...args: any[]); }
	export class ChromaticAberrationEffect { blendMode: any; offset: { set(...args: any[]): void }; constructor(...args: any[]); }
}

declare namespace THREE {
	type WebGLRenderer = any;
	type ShaderMaterial = any;
	type Scene = any;
	type PerspectiveCamera = any;
	type WebGLRenderTarget = any;
	type BufferGeometry = any;
	type Object3D = any;
	type Texture = any;
	type Material = any;
	type Mesh = any;
	type Color = any;
	type Vector2 = any;
	type Vector3 = any;
}

declare module 'three' {
	const THREE: any;
	export = THREE;
}
