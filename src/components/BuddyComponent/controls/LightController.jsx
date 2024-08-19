const LightController = (props) => (
  <>
    <directionalLight
      castShadow
      intensity={4}
      // shadow-mapSize-width={1024}
      // shadow-mapSize-height={1024}
      // shadow-camera-far={50}
      // shadow-camera-left={-100}
      // shadow-camera-right={100}
      // shadow-camera-top={100}
      // shadow-camera-bottom={-100}
    />
    <ambientLight intensity={0.8} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
  </>
);

export default LightController;
