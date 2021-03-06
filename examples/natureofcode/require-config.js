
require([
    'Example',
    './vectors/BouncingBall',
    './vectors/VectorSubtraction',
    './vectors/VectorMultiplication',
    './vectors/VectorNormalization',
    './vectors/MotionVelocity',
    './vectors/ConstantAcceleration',
    './vectors/RandomAcceleration',
    './vectors/AccelerateTowardsMouse',
    './vectors/MultipleAccelerateTowardsMouse',
    './forces/Forces',
    './forces/GravityScaledByMass',
    './forces/IncludingFriction',
    './forces/FluidResistance',
    './forces/Attraction',
    './forces/MultipleAttractors'
    // './forces/attractionManyMovers',
    // './forces/mutualAttraction',
    // './oscillation/angularMotionUsingRotate',
    // './oscillation/forcesAngularMotion',
    // './oscillation/pointingDirectionOfMotion',
    // './oscillation/polarToCartesian',
    // './oscillation/simpleHarmonicMotion',
    // './oscillation/oscillatingObjects',
    // './oscillation/wave',
    // './oscillation/swingingPendulum',
    // './oscillation/springConnection'
], (
    example,
    bouncingBall,
    vectorSubtraction,
    vectorMultiplication,
    vectorNormalization,
    motionVelocity,
    constantAcceleration,
    randomAcceleration,
    accelerateTowardsMouse,
    multipleAccelerateTowardsMouse,
    forces,
    gravityScaledByMass,
    includingFriction,
    fluidResistance,
    attraction,
    multipleAttractors
    // attractionManyMovers,
    // mutualAttraction,
    // angularMotionUsingRotate,
    // forcesAngularMotion,
    // pointingDirectionOfMotion,
    // polarToCartesian,
    // simpleHarmonicMotion,
    // oscillatingObjects,
    // wave,
    // swingingPendulum,
    // springConnection
    ) => {

        var e;

        function setExample(scene) {
            $('#main').empty();
            if (e) e.mainScene.dispose();
            e = new example.default();
            e.mainScene = scene;
            e.init();
        }

        $('#scene').on('change', function() {
            var selected = $('#scene option:selected').val();
            setExample(eval("new " + selected + ".default()"));
        });

        setExample(new bouncingBall.default());
    }
);