enum eColorsLine { 
    "low" = "FD8E6B",
    "medium" = "FDEEAF",
    "high" = "D1E9BD"
}

function ChargeController(percentage: number) {
    // low = 18 - 0;
    // medium = 50 - 18;
    // high = 100 - 50 
    let colorLine;

    if (percentage > 50) { 
        colorLine = eColorsLine.high;
    }else if (percentage <= 50 && percentage > 18 ) { 
        colorLine = eColorsLine.medium;
    }else if (percentage <= 18 ) { 
        colorLine = eColorsLine.low;
    }
 
 
    return{ 
        colorLine: colorLine,
    }
};

export default ChargeController;