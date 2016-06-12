
require.config({
    paths: {
        'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});

require([
    'jquery',
    './vectors/bouncingBall',
    './vectors/vectorSubtraction',
    './vectors/vectorMultiplication',
    './vectors/vectorNormalization',
    './vectors/motionVelocity',
    './vectors/constantAcceleration',
    './vectors/randomAcceleration',
    './vectors/accelerateTowardsMouse',
    './vectors/multipleAccelerateTowardsMouse',
    './forces/forces',
    './forces/gravityScaledByMass',
    './forces/includingFriction',
    './forces/fluidResistance',
    './forces/attraction',
    './forces/attractionManyMovers',
    './forces/mutualAttraction',
    './oscillation/angularMotionUsingRotate',
    './oscillation/forcesAngularMotion',
    './oscillation/pointingDirectionOfMotion',
    './oscillation/polarToCartesian',
    './oscillation/simpleHarmonicMotion',
    './oscillation/oscillatingObjects',
    './oscillation/wave',
    './oscillation/swingingPendulum',
    './oscillation/springConnection'
], ($,
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
    attractionManyMovers,
    mutualAttraction,
    angularMotionUsingRotate,
    forcesAngularMotion,
    pointingDirectionOfMotion,
    polarToCartesian,
    simpleHarmonicMotion,
    oscillatingObjects,
    wave,
    swingingPendulum,
    springConnection) => {

        sketch = new bouncingBall();

        $('#sketch').on('change', function() {
            var selected = $('#sketch option:selected').val();
            sketch = eval("new " + selected + "()");
        });

    }
);