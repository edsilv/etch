
require([
    'Example',
    './vectors/BouncingBall',
    './vectors/VectorSubtraction',
    './vectors/vectorMultiplication',
    './vectors/vectorNormalization',
    './vectors/motionVelocity'
    // './vectors/constantAcceleration',
    // './vectors/randomAcceleration',
    // './vectors/accelerateTowardsMouse',
    // './vectors/multipleAccelerateTowardsMouse',
    // './forces/forces',
    // './forces/gravityScaledByMass',
    // './forces/includingFriction',
    // './forces/fluidResistance',
    // './forces/attraction',
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
    motionVelocity
    // constantAcceleration,
    // randomAcceleration,
    // accelerateTowardsMouse,
    // multipleAccelerateTowardsMouse,
    // forces,
    // gravityScaledByMass,
    // includingFriction,
    // fluidResistance,
    // attraction,
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

        function setExample(scene) {
            $('#main').empty();
            var e = new example.default();
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