const LightController = (props) => (
  <>
    <directionalLight castShadow intensity={5} />
    <ambientLight intensity={1} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
  </>
);

export default LightController;
