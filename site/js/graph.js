
let data = {}
const optionData =  {
    all: {
        legend: 'Ecart de température'
    },
    solar: {
        legend: 'Iradience solaire',
        color: '#ffee58'
    },
    orbital: {
        legend: 'Orbite terrstre',
        color: '#03a9f4'
    },
    human: {
        legend: 'Facteur humain',
        color: '#388e3c'
    },
    volcanic: {
        legend: 'Activité volcanique',
        color: '#E67947'
    },
    ghg: {
        legend: 'Gaz à effet de serre',
        color: '#FF0000'
    }

}

option = (data, elemTarget) => {
    const xAxis = {
        data: [1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
        boundaryGap: false
    }
    const yAxis = {
        // type: 'value',
    }
    const series = {
        name: optionData[elemTarget].legend,
        type: 'line',
        data,
        color: optionData[elemTarget].color
    }
    const option = {
        animationDuration: 5000,
        tooltip: {},
        legend: {
            padding: 5
        },
        xAxis,
        yAxis,
        series: [{
            name: optionData.all.legend,
            type: 'line',
            data: ["0.04","0.09","0.07","0.02","-0.31","-0.27","-0.21","-0.15","-0.09","-0.07","-0.06","-0.11","-0.12","0.03","0.09","0.12","0.07","0.05","0.09","0.10","0.09","0.13","0.09","-0.09","-0.06","-0.01","0.09","0.07","0.08","0.13","0.11","0.17","0.09","0.00","0.05","0.10","0.12","0.17","0.15","0.18","0.17","0.13","0.17","0.22","0.20","0.19","0.16","0.21","0.21","0.18","0.21","0.21","0.21","0.20","0.25","0.21","0.23","0.26","0.29","0.28","0.29","0.35","0.33","0.30","0.27","0.27","0.24","0.26","0.28","0.26","0.26","0.23","0.21","0.23","0.21","0.27","0.25","0.28","0.33","0.32","0.27","0.34","0.34","0.27","0.09","0.10","0.17","0.21","0.26","0.25","0.30","0.33","0.38","0.40","0.40","0.35","0.40","0.46","0.46","0.49","0.52","0.58","0.45","0.30","0.39","0.47","0.49","0.56","0.58","0.61","0.66","0.62","0.33","0.40","0.50","0.63","0.65","0.68","0.77","0.81","0.85","0.86","0.88","0.89","0.92","0.90",null,null,null,null,null,null,null,null,null],
            color: '#000000'
        },
        series,
    ]
    };
    return option
}

char = (option, target) => {
    var myChart = echarts.init(document.getElementById(`graph${target}`))
    myChart.setOption(option)
}

setChar = (elemTarget, data) => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                char(option(elemTarget == 'all' ? {} : data[elemTarget], elemTarget), elemTarget)
            }
        })}
    ,{
        threshold: 0.75
    })
    let target = document.querySelector(`.${elemTarget}`)
    observer.observe(target)
}

fetch('./../../data/temp.json')
    .then(res => res.json())
    .then(data => {
        setChar('all', data)
        setChar('solar', data)
        setChar('orbital', data)
        setChar('human', data)
        setChar('volcanic', data)
        setChar('ghg', data)
    })
