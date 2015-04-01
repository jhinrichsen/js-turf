var serial_maker = function () {
     // Produce an object that produces unique strings. A
     // unique string is made up of two parts: a prefix
     // and a sequence number. The object comes with
     // methods for setting the prefix and sequence
￼Module | 41
// number, and a gensym method that produces unique
// strings.
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
seq = s; },
gensym: function () {
var result = prefix + seq; seq += 1;
return result;
} };
};
var seqer =
seqer.set_prefix = ('Q';) seqer.set_seq = (1000);
var unique = seqer.gensym();
serial_maker();
// unique is "Q1000"
