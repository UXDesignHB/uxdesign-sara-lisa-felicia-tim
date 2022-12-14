
import "./GlobalWarming.css";

// import Vid from "../../Images/StigandeHavsniva.mp4";
import { useState } from "react";
import ReactPlayer from "react-player";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const meltingdata = [
  { "Medeltemperatur": -0.2, "Source": "GISTEMP", "Year": 1880 },
  { "Medeltemperatur": -0.1148, "Source": "GCAG", "Year": 1880 },
  { "Medeltemperatur": -0.12, "Source": "GISTEMP", "Year": 1881 },
  { "Medeltemperatur": -0.0628, "Source": "GCAG", "Year": 1881 },
  { "Medeltemperatur": -0.1, "Source": "GISTEMP", "Year": 1882 },
  { "Medeltemperatur": -0.0648, "Source": "GCAG", "Year": 1882 },
  { "Medeltemperatur": -0.21, "Source": "GISTEMP", "Year": 1883 },
  { "Medeltemperatur": -0.1424, "Source": "GCAG", "Year": 1883 },
  { "Medeltemperatur": -0.28, "Source": "GISTEMP", "Year": 1884 },
  { "Medeltemperatur": -0.2009, "Source": "GCAG", "Year": 1884 },
  { "Medeltemperatur": -0.32, "Source": "GISTEMP", "Year": 1885 },
  { "Medeltemperatur": -0.2125, "Source": "GCAG", "Year": 1885 },
  { "Medeltemperatur": -0.31, "Source": "GISTEMP", "Year": 1886 },
  { "Medeltemperatur": -0.2003, "Source": "GCAG", "Year": 1886 },
  { "Medeltemperatur": -0.33, "Source": "GISTEMP", "Year": 1887 },
  { "Medeltemperatur": -0.2489, "Source": "GCAG", "Year": 1887 },
  { "Medeltemperatur": -0.2, "Source": "GISTEMP", "Year": 1888 },
  { "Medeltemperatur": -0.1471, "Source": "GCAG", "Year": 1888 },
  { "Medeltemperatur": -0.12, "Source": "GISTEMP", "Year": 1889 },
  { "Medeltemperatur": -0.0982, "Source": "GCAG", "Year": 1889 },
  { "Medeltemperatur": -0.37, "Source": "GISTEMP", "Year": 1890 },
  { "Medeltemperatur": -0.322, "Source": "GCAG", "Year": 1890 },
  { "Medeltemperatur": -0.24, "Source": "GISTEMP", "Year": 1891 },
  { "Medeltemperatur": -0.2532, "Source": "GCAG", "Year": 1891 },
  { "Medeltemperatur": -0.27, "Source": "GISTEMP", "Year": 1892 },
  { "Medeltemperatur": -0.3062, "Source": "GCAG", "Year": 1892 },
  { "Medeltemperatur": -0.3, "Source": "GISTEMP", "Year": 1893 },
  { "Medeltemperatur": -0.3212, "Source": "GCAG", "Year": 1893 },
  { "Medeltemperatur": -0.31, "Source": "GISTEMP", "Year": 1894 },
  { "Medeltemperatur": -0.2808, "Source": "GCAG", "Year": 1894 },
  { "Medeltemperatur": -0.21, "Source": "GISTEMP", "Year": 1895 },
  { "Medeltemperatur": -0.229, "Source": "GCAG", "Year": 1895 },
  { "Medeltemperatur": -0.15, "Source": "GISTEMP", "Year": 1896 },
  { "Medeltemperatur": -0.0974, "Source": "GCAG", "Year": 1896 },
  { "Medeltemperatur": -0.11, "Source": "GISTEMP", "Year": 1897 },
  { "Medeltemperatur": -0.1224, "Source": "GCAG", "Year": 1897 },
  { "Medeltemperatur": -0.28, "Source": "GISTEMP", "Year": 1898 },
  { "Medeltemperatur": -0.2546, "Source": "GCAG", "Year": 1898 },
  { "Medeltemperatur": -0.16, "Source": "GISTEMP", "Year": 1899 },
  { "Medeltemperatur": -0.1173, "Source": "GCAG", "Year": 1899 },
  { "Medeltemperatur": -0.09, "Source": "GISTEMP", "Year": 1900 },
  { "Medeltemperatur": -0.0679, "Source": "GCAG", "Year": 1900 },
  { "Medeltemperatur": -0.15, "Source": "GISTEMP", "Year": 1901 },
  { "Medeltemperatur": -0.1417, "Source": "GCAG", "Year": 1901 },
  { "Medeltemperatur": -0.27, "Source": "GISTEMP", "Year": 1902 },
  { "Medeltemperatur": -0.2463, "Source": "GCAG", "Year": 1902 },
  { "Medeltemperatur": -0.35, "Source": "GISTEMP", "Year": 1903 },
  { "Medeltemperatur": -0.3369, "Source": "GCAG", "Year": 1903 },
  { "Medeltemperatur": -0.44, "Source": "GISTEMP", "Year": 1904 },
  { "Medeltemperatur": -0.4194, "Source": "GCAG", "Year": 1904 },
  { "Medeltemperatur": -0.28, "Source": "GISTEMP", "Year": 1905 },
  { "Medeltemperatur": -0.2931, "Source": "GCAG", "Year": 1905 },
  { "Medeltemperatur": -0.23, "Source": "GISTEMP", "Year": 1906 },
  { "Medeltemperatur": -0.2174, "Source": "GCAG", "Year": 1906 },
  { "Medeltemperatur": -0.4, "Source": "GISTEMP", "Year": 1907 },
  { "Medeltemperatur": -0.3706, "Source": "GCAG", "Year": 1907 },
  { "Medeltemperatur": -0.43, "Source": "GISTEMP", "Year": 1908 },
  { "Medeltemperatur": -0.4396, "Source": "GCAG", "Year": 1908 },
  { "Medeltemperatur": -0.47, "Source": "GISTEMP", "Year": 1909 },
  { "Medeltemperatur": -0.4261, "Source": "GCAG", "Year": 1909 },
  { "Medeltemperatur": -0.42, "Source": "GISTEMP", "Year": 1910 },
  { "Medeltemperatur": -0.3789, "Source": "GCAG", "Year": 1910 },
  { "Medeltemperatur": -0.44, "Source": "GISTEMP", "Year": 1911 },
  { "Medeltemperatur": -0.4332, "Source": "GCAG", "Year": 1911 },
  { "Medeltemperatur": -0.35, "Source": "GISTEMP", "Year": 1912 },
  { "Medeltemperatur": -0.3288, "Source": "GCAG", "Year": 1912 },
  { "Medeltemperatur": -0.34, "Source": "GISTEMP", "Year": 1913 },
  { "Medeltemperatur": -0.3162, "Source": "GCAG", "Year": 1913 },
  { "Medeltemperatur": -0.16, "Source": "GISTEMP", "Year": 1914 },
  { "Medeltemperatur": -0.1395, "Source": "GCAG", "Year": 1914 },
  { "Medeltemperatur": -0.11, "Source": "GISTEMP", "Year": 1915 },
  { "Medeltemperatur": -0.0693, "Source": "GCAG", "Year": 1915 },
  { "Medeltemperatur": -0.34, "Source": "GISTEMP", "Year": 1916 },
  { "Medeltemperatur": -0.293, "Source": "GCAG", "Year": 1916 },
  { "Medeltemperatur": -0.4, "Source": "GISTEMP", "Year": 1917 },
  { "Medeltemperatur": -0.3146, "Source": "GCAG", "Year": 1917 },
  { "Medeltemperatur": -0.26, "Source": "GISTEMP", "Year": 1918 },
  { "Medeltemperatur": -0.2084, "Source": "GCAG", "Year": 1918 },
  { "Medeltemperatur": -0.22, "Source": "GISTEMP", "Year": 1919 },
  { "Medeltemperatur": -0.2055, "Source": "GCAG", "Year": 1919 },
  { "Medeltemperatur": -0.27, "Source": "GISTEMP", "Year": 1920 },
  { "Medeltemperatur": -0.2105, "Source": "GCAG", "Year": 1920 },
  { "Medeltemperatur": -0.21, "Source": "GISTEMP", "Year": 1921 },
  { "Medeltemperatur": -0.1485, "Source": "GCAG", "Year": 1921 },
  { "Medeltemperatur": -0.28, "Source": "GISTEMP", "Year": 1922 },
  { "Medeltemperatur": -0.2304, "Source": "GCAG", "Year": 1922 },
  { "Medeltemperatur": -0.24, "Source": "GISTEMP", "Year": 1923 },
  { "Medeltemperatur": -0.2156, "Source": "GCAG", "Year": 1923 },
  { "Medeltemperatur": -0.28, "Source": "GISTEMP", "Year": 1924 },
  { "Medeltemperatur": -0.2486, "Source": "GCAG", "Year": 1924 },
  { "Medeltemperatur": -0.21, "Source": "GISTEMP", "Year": 1925 },
  { "Medeltemperatur": -0.1481, "Source": "GCAG", "Year": 1925 },
  { "Medeltemperatur": -0.1, "Source": "GISTEMP", "Year": 1926 },
  { "Medeltemperatur": -0.0667, "Source": "GCAG", "Year": 1926 },
  { "Medeltemperatur": -0.21, "Source": "GISTEMP", "Year": 1927 },
  { "Medeltemperatur": -0.1546, "Source": "GCAG", "Year": 1927 },
  { "Medeltemperatur": -0.21, "Source": "GISTEMP", "Year": 1928 },
  { "Medeltemperatur": -0.1774, "Source": "GCAG", "Year": 1928 },
  { "Medeltemperatur": -0.36, "Source": "GISTEMP", "Year": 1929 },
  { "Medeltemperatur": -0.2985, "Source": "GCAG", "Year": 1929 },
  { "Medeltemperatur": -0.15, "Source": "GISTEMP", "Year": 1930 },
  { "Medeltemperatur": -0.1003, "Source": "GCAG", "Year": 1930 },
  { "Medeltemperatur": -0.09, "Source": "GISTEMP", "Year": 1931 },
  { "Medeltemperatur": -0.0686, "Source": "GCAG", "Year": 1931 },
  { "Medeltemperatur": -0.17, "Source": "GISTEMP", "Year": 1932 },
  { "Medeltemperatur": -0.1168, "Source": "GCAG", "Year": 1932 },
  { "Medeltemperatur": -0.29, "Source": "GISTEMP", "Year": 1933 },
  { "Medeltemperatur": -0.2439, "Source": "GCAG", "Year": 1933 },
  { "Medeltemperatur": -0.14, "Source": "GISTEMP", "Year": 1934 },
  { "Medeltemperatur": -0.1015, "Source": "GCAG", "Year": 1934 },
  { "Medeltemperatur": -0.2, "Source": "GISTEMP", "Year": 1935 },
  { "Medeltemperatur": -0.1392, "Source": "GCAG", "Year": 1935 },
  { "Medeltemperatur": -0.15, "Source": "GISTEMP", "Year": 1936 },
  { "Medeltemperatur": -0.1134, "Source": "GCAG", "Year": 1936 },
  { "Medeltemperatur": -0.03, "Source": "GISTEMP", "Year": 1937 },
  { "Medeltemperatur": -0.0157, "Source": "GCAG", "Year": 1937 },
  { "Medeltemperatur": -0.03, "Source": "GISTEMP", "Year": 1938 },
  { "Medeltemperatur": -0.0288, "Source": "GCAG", "Year": 1938 },
  { "Medeltemperatur": -0.03, "Source": "GISTEMP", "Year": 1939 },
  { "Medeltemperatur": -0.0139, "Source": "GCAG", "Year": 1939 },
  { "Medeltemperatur": 0.08, "Source": "GISTEMP", "Year": 1940 },
  { "Medeltemperatur": 0.0947, "Source": "GCAG", "Year": 1940 },
  { "Medeltemperatur": 0.12, "Source": "GISTEMP", "Year": 1941 },
  { "Medeltemperatur": 0.196, "Source": "GCAG", "Year": 1941 },
  { "Medeltemperatur": 0.09, "Source": "GISTEMP", "Year": 1942 },
  { "Medeltemperatur": 0.1538, "Source": "GCAG", "Year": 1942 },
  { "Medeltemperatur": 0.13, "Source": "GISTEMP", "Year": 1943 },
  { "Medeltemperatur": 0.157, "Source": "GCAG", "Year": 1943 },
  { "Medeltemperatur": 0.25, "Source": "GISTEMP", "Year": 1944 },
  { "Medeltemperatur": 0.2928, "Source": "GCAG", "Year": 1944 },
  { "Medeltemperatur": 0.12, "Source": "GISTEMP", "Year": 1945 },
  { "Medeltemperatur": 0.171, "Source": "GCAG", "Year": 1945 },
  { "Medeltemperatur": -0.04, "Source": "GISTEMP", "Year": 1946 },
  { "Medeltemperatur": -0.004, "Source": "GCAG", "Year": 1946 },
  { "Medeltemperatur": -0.05, "Source": "GISTEMP", "Year": 1947 },
  { "Medeltemperatur": -0.0477, "Source": "GCAG", "Year": 1947 },
  { "Medeltemperatur": -0.09, "Source": "GISTEMP", "Year": 1948 },
  { "Medeltemperatur": -0.0487, "Source": "GCAG", "Year": 1948 },
  { "Medeltemperatur": -0.09, "Source": "GISTEMP", "Year": 1949 },
  { "Medeltemperatur": -0.0568, "Source": "GCAG", "Year": 1949 },
  { "Medeltemperatur": -0.18, "Source": "GISTEMP", "Year": 1950 },
  { "Medeltemperatur": -0.1616, "Source": "GCAG", "Year": 1950 },
  { "Medeltemperatur": -0.07, "Source": "GISTEMP", "Year": 1951 },
  { "Medeltemperatur": -0.0132, "Source": "GCAG", "Year": 1951 },
  { "Medeltemperatur": 0.01, "Source": "GISTEMP", "Year": 1952 },
  { "Medeltemperatur": 0.0248, "Source": "GCAG", "Year": 1952 },
  { "Medeltemperatur": 0.08, "Source": "GISTEMP", "Year": 1953 },
  { "Medeltemperatur": 0.0952, "Source": "GCAG", "Year": 1953 },
  { "Medeltemperatur": -0.13, "Source": "GISTEMP", "Year": 1954 },
  { "Medeltemperatur": -0.1165, "Source": "GCAG", "Year": 1954 },
  { "Medeltemperatur": -0.15, "Source": "GISTEMP", "Year": 1955 },
  { "Medeltemperatur": -0.1354, "Source": "GCAG", "Year": 1955 },
  { "Medeltemperatur": -0.2, "Source": "GISTEMP", "Year": 1956 },
  { "Medeltemperatur": -0.199, "Source": "GCAG", "Year": 1956 },
  { "Medeltemperatur": 0.04, "Source": "GISTEMP", "Year": 1957 },
  { "Medeltemperatur": 0.0488, "Source": "GCAG", "Year": 1957 },
  { "Medeltemperatur": 0.07, "Source": "GISTEMP", "Year": 1958 },
  { "Medeltemperatur": 0.1095, "Source": "GCAG", "Year": 1958 },
  { "Medeltemperatur": 0.03, "Source": "GISTEMP", "Year": 1959 },
  { "Medeltemperatur": 0.0596, "Source": "GCAG", "Year": 1959 },
  { "Medeltemperatur": -0.02, "Source": "GISTEMP", "Year": 1960 },
  { "Medeltemperatur": 0.0204, "Source": "GCAG", "Year": 1960 },
  { "Medeltemperatur": 0.05, "Source": "GISTEMP", "Year": 1961 },
  { "Medeltemperatur": 0.0775, "Source": "GCAG", "Year": 1961 },
  { "Medeltemperatur": 0.03, "Source": "GISTEMP", "Year": 1962 },
  { "Medeltemperatur": 0.0888, "Source": "GCAG", "Year": 1962 },
  { "Medeltemperatur": 0.06, "Source": "GISTEMP", "Year": 1963 },
  { "Medeltemperatur": 0.1068, "Source": "GCAG", "Year": 1963 },
  { "Medeltemperatur": -0.2, "Source": "GISTEMP", "Year": 1964 },
  { "Medeltemperatur": -0.1495, "Source": "GCAG", "Year": 1964 },
  { "Medeltemperatur": -0.1, "Source": "GISTEMP", "Year": 1965 },
  { "Medeltemperatur": -0.078, "Source": "GCAG", "Year": 1965 },
  { "Medeltemperatur": -0.05, "Source": "GISTEMP", "Year": 1966 },
  { "Medeltemperatur": -0.0227, "Source": "GCAG", "Year": 1966 },
  { "Medeltemperatur": -0.02, "Source": "GISTEMP", "Year": 1967 },
  { "Medeltemperatur": -0.0131, "Source": "GCAG", "Year": 1967 },
  { "Medeltemperatur": -0.07, "Source": "GISTEMP", "Year": 1968 },
  { "Medeltemperatur": -0.0296, "Source": "GCAG", "Year": 1968 },
  { "Medeltemperatur": 0.07, "Source": "GISTEMP", "Year": 1969 },
  { "Medeltemperatur": 0.0929, "Source": "GCAG", "Year": 1969 },
  { "Medeltemperatur": 0.02, "Source": "GISTEMP", "Year": 1970 },
  { "Medeltemperatur": 0.0372, "Source": "GCAG", "Year": 1970 },
  { "Medeltemperatur": -0.09, "Source": "GISTEMP", "Year": 1971 },
  { "Medeltemperatur": -0.0783, "Source": "GCAG", "Year": 1971 },
  { "Medeltemperatur": 0.01, "Source": "GISTEMP", "Year": 1972 },
  { "Medeltemperatur": 0.0264, "Source": "GCAG", "Year": 1972 },
  { "Medeltemperatur": 0.15, "Source": "GISTEMP", "Year": 1973 },
  { "Medeltemperatur": 0.1641, "Source": "GCAG", "Year": 1973 },
  { "Medeltemperatur": -0.07, "Source": "GISTEMP", "Year": 1974 },
  { "Medeltemperatur": -0.0719, "Source": "GCAG", "Year": 1974 },
  { "Medeltemperatur": -0.02, "Source": "GISTEMP", "Year": 1975 },
  { "Medeltemperatur": 0.0034, "Source": "GCAG", "Year": 1975 },
  { "Medeltemperatur": -0.11, "Source": "GISTEMP", "Year": 1976 },
  { "Medeltemperatur": -0.0792, "Source": "GCAG", "Year": 1976 },
  { "Medeltemperatur": 0.18, "Source": "GISTEMP", "Year": 1977 },
  { "Medeltemperatur": 0.1978, "Source": "GCAG", "Year": 1977 },
  { "Medeltemperatur": 0.07, "Source": "GISTEMP", "Year": 1978 },
  { "Medeltemperatur": 0.1123, "Source": "GCAG", "Year": 1978 },
  { "Medeltemperatur": 0.17, "Source": "GISTEMP", "Year": 1979 },
  { "Medeltemperatur": 0.2273, "Source": "GCAG", "Year": 1979 },
  { "Medeltemperatur": 0.27, "Source": "GISTEMP", "Year": 1980 },
  { "Medeltemperatur": 0.2637, "Source": "GCAG", "Year": 1980 },
  { "Medeltemperatur": 0.33, "Source": "GISTEMP", "Year": 1981 },
  { "Medeltemperatur": 0.2999, "Source": "GCAG", "Year": 1981 },
  { "Medeltemperatur": 0.13, "Source": "GISTEMP", "Year": 1982 },
  { "Medeltemperatur": 0.1815, "Source": "GCAG", "Year": 1982 },
  { "Medeltemperatur": 0.3, "Source": "GISTEMP", "Year": 1983 },
  { "Medeltemperatur": 0.3411, "Source": "GCAG", "Year": 1983 },
  { "Medeltemperatur": 0.15, "Source": "GISTEMP", "Year": 1984 },
  { "Medeltemperatur": 0.149, "Source": "GCAG", "Year": 1984 },
  { "Medeltemperatur": 0.12, "Source": "GISTEMP", "Year": 1985 },
  { "Medeltemperatur": 0.1342, "Source": "GCAG", "Year": 1985 },
  { "Medeltemperatur": 0.19, "Source": "GISTEMP", "Year": 1986 },
  { "Medeltemperatur": 0.2296, "Source": "GCAG", "Year": 1986 },
  { "Medeltemperatur": 0.33, "Source": "GISTEMP", "Year": 1987 },
  { "Medeltemperatur": 0.3696, "Source": "GCAG", "Year": 1987 },
  { "Medeltemperatur": 0.41, "Source": "GISTEMP", "Year": 1988 },
  { "Medeltemperatur": 0.3757, "Source": "GCAG", "Year": 1988 },
  { "Medeltemperatur": 0.29, "Source": "GISTEMP", "Year": 1989 },
  { "Medeltemperatur": 0.297, "Source": "GCAG", "Year": 1989 },
  { "Medeltemperatur": 0.44, "Source": "GISTEMP", "Year": 1990 },
  { "Medeltemperatur": 0.4328, "Source": "GCAG", "Year": 1990 },
  { "Medeltemperatur": 0.43, "Source": "GISTEMP", "Year": 1991 },
  { "Medeltemperatur": 0.4055, "Source": "GCAG", "Year": 1991 },
  { "Medeltemperatur": 0.23, "Source": "GISTEMP", "Year": 1992 },
  { "Medeltemperatur": 0.2571, "Source": "GCAG", "Year": 1992 },
  { "Medeltemperatur": 0.24, "Source": "GISTEMP", "Year": 1993 },
  { "Medeltemperatur": 0.2853, "Source": "GCAG", "Year": 1993 },
  { "Medeltemperatur": 0.32, "Source": "GISTEMP", "Year": 1994 },
  { "Medeltemperatur": 0.3409, "Source": "GCAG", "Year": 1994 },
  { "Medeltemperatur": 0.46, "Source": "GISTEMP", "Year": 1995 },
  { "Medeltemperatur": 0.4577, "Source": "GCAG", "Year": 1995 },
  { "Medeltemperatur": 0.35, "Source": "GISTEMP", "Year": 1996 },
  { "Medeltemperatur": 0.3228, "Source": "GCAG", "Year": 1996 },
  { "Medeltemperatur": 0.48, "Source": "GISTEMP", "Year": 1997 },
  { "Medeltemperatur": 0.5187, "Source": "GCAG", "Year": 1997 },
  { "Medeltemperatur": 0.64, "Source": "GISTEMP", "Year": 1998 },
  { "Medeltemperatur": 0.6344, "Source": "GCAG", "Year": 1998 },
  { "Medeltemperatur": 0.42, "Source": "GISTEMP", "Year": 1999 },
  { "Medeltemperatur": 0.4438, "Source": "GCAG", "Year": 1999 },
  { "Medeltemperatur": 0.42, "Source": "GISTEMP", "Year": 2000 },
  { "Medeltemperatur": 0.4262, "Source": "GCAG", "Year": 2000 },
  { "Medeltemperatur": 0.55, "Source": "GISTEMP", "Year": 2001 },
  { "Medeltemperatur": 0.5473, "Source": "GCAG", "Year": 2001 },
  { "Medeltemperatur": 0.63, "Source": "GISTEMP", "Year": 2002 },
  { "Medeltemperatur": 0.6023, "Source": "GCAG", "Year": 2002 },
  { "Medeltemperatur": 0.62, "Source": "GISTEMP", "Year": 2003 },
  { "Medeltemperatur": 0.6134, "Source": "GCAG", "Year": 2003 },
  { "Medeltemperatur": 0.55, "Source": "GISTEMP", "Year": 2004 },
  { "Medeltemperatur": 0.5783, "Source": "GCAG", "Year": 2004 },
  { "Medeltemperatur": 0.69, "Source": "GISTEMP", "Year": 2005 },
  { "Medeltemperatur": 0.6585, "Source": "GCAG", "Year": 2005 },
  { "Medeltemperatur": 0.63, "Source": "GISTEMP", "Year": 2006 },
  { "Medeltemperatur": 0.6125, "Source": "GCAG", "Year": 2006 },
  { "Medeltemperatur": 0.66, "Source": "GISTEMP", "Year": 2007 },
  { "Medeltemperatur": 0.61, "Source": "GCAG", "Year": 2007 },
  { "Medeltemperatur": 0.54, "Source": "GISTEMP", "Year": 2008 },
  { "Medeltemperatur": 0.5419, "Source": "GCAG", "Year": 2008 },
  { "Medeltemperatur": 0.64, "Source": "GISTEMP", "Year": 2009 },
  { "Medeltemperatur": 0.6367, "Source": "GCAG", "Year": 2009 },
  { "Medeltemperatur": 0.71, "Source": "GISTEMP", "Year": 2010 },
  { "Medeltemperatur": 0.7014, "Source": "GCAG", "Year": 2010 },
  { "Medeltemperatur": 0.6, "Source": "GISTEMP", "Year": 2011 },
  { "Medeltemperatur": 0.5788, "Source": "GCAG", "Year": 2011 },
  { "Medeltemperatur": 0.63, "Source": "GISTEMP", "Year": 2012 },
  { "Medeltemperatur": 0.624, "Source": "GCAG", "Year": 2012 },
  { "Medeltemperatur": 0.65, "Source": "GISTEMP", "Year": 2013 },
  { "Medeltemperatur": 0.6679, "Source": "GCAG", "Year": 2013 },
  { "Medeltemperatur": 0.74, "Source": "GISTEMP", "Year": 2014 },
  { "Medeltemperatur": 0.7408, "Source": "GCAG", "Year": 2014 },
  { "Medeltemperatur": 0.87, "Source": "GISTEMP", "Year": 2015 },
  { "Medeltemperatur": 0.8998, "Source": "GCAG", "Year": 2015 },
  { "Medeltemperatur": 0.99, "Source": "GISTEMP", "Year": 2016 },
  { "Medeltemperatur": 0.9363, "Source": "GCAG", "Year": 2016 }
];


const GlobalWarming = ({ data }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
  
 <div className="container">
      {data
        .filter((arrayID) => arrayID.id === "4")
        .map((arrayData) => (
          <div key={arrayData.title}>
            <h1 style={{ color: arrayData.textcolor }} className="bigHeading">
              {arrayData.title}{" "}
            </h1>
            <p className="smallHeading" style={{ color: arrayData.textcolor }}>{arrayData.subtitle}</p>

            <div className="popupGrid">
              <div className="topLeftGrid">
                <LineChart
                  width={490}
                  height={400}
                  data={meltingdata}
                  margin={{
                    top: 5,
                    bottom: 5,
                    left: -15,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Year" />
                  <YAxis />
                  <Tooltip contentStyle={{ color: "#DA07F6"}} itemStyle={{ color: "black"}} wrapperStyle={{ backgroundColor: "black" }} labelStyle={{color: "black"}}  />
                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="Medeltemperatur"
                    stroke={arrayData.textcolor}
                  />

                 
                </LineChart>
                <p>
                  Data: GISS Surface Temperature (GISTEMP) analys och den
                  globala komponenten av Climate at a Glance (GCAG).
                </p>
              </div>
              <div className="topRightGrid">
                <p className="smallHeading">
                  <b style={{ color: arrayData.textcolor }}>
                    {arrayData.graphtitle}
                  </b>
                </p>
                <p>{arrayData.graphtext}</p>
              </div>
              <div className="bottomLeftGrid">
                <p className="smallHeading">
                  <b style={{ color: arrayData.textcolor }}>
                    {arrayData.videotitle}
                  </b>
                </p>
                <p>{arrayData.videotext}</p>
              </div>
              <div className="bottomRightGrid">
                <div className="vidcontainer">
                  <div >
                    <ReactPlayer
                      url= "https://youtu.be/uBR3HDiwUGU"
               
                      playing={true}
                      // controls={true}
                      loop={true}
                      muted={true}
                       playsinline={true}
                      onReady={onLoadedData}
                      width="100%"
                  
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  

   
  );
};

export default GlobalWarming;

