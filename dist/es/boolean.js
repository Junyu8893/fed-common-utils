export function boolToYN(o){if("boolean"!=typeof o)throw new Error("The value argument must be a boolean type");return o?"Y":"N"}export function ynToBool(o,n){let e=String(o).toUpperCase();if("Y"!==e&&"N"!==e){if(null==n)throw new Error('The value argument must be "Y" or "N"');e=String(n).toUpperCase()}return"Y"===e}export function allY(o){return o.every((function(o){return ynToBool(o)}))}export function someY(o){return o.some((function(o){return ynToBool(o)}))}export function allN(o){return o.every((function(o){return!ynToBool(o)}))}export function someN(o){return o.some((function(o){return!ynToBool(o)}))}