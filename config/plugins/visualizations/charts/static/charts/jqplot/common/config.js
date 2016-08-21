define( [ 'plugin/charts/utilities/tabular-form' ], function( default_config ) {
    return $.extend(true, {}, default_config, {
        title       : '',
        category    : '',
        library     : 'jqPlot',
        tag         : 'div',
        zoomable    : true,
        keywords    : 'jqplot',
        settings    : {
            x_axis_grid : {
                label       : 'Axis grid',
                help        : 'Would you like to show grid lines for the X axis?',
                type        : 'select',
                display     : 'radiobutton',
                value       : 'false',
                data        : [ { label: 'On', value: 'true' }, { label: 'Off', value: 'false' } ]
            },
            y_axis_grid : {
                label       : 'Axis grid',
                help        : 'Would you like to show grid lines for the Y axis?',
                type        : 'select',
                display     : 'radiobutton',
                value       : 'true',
                data        : [ { label: 'On', value: 'true' }, { label: 'Off', value: 'false' } ]
            }
        }
    });
});