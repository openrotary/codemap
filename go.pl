#!/usr/bin/perl -w

use strict;
use feature qw(say);
use Data::Dumper;

my ($read_url) = @ARGV;

open READ, "<$read_url" or die "$!";


sub trim {
	my $s = shift;
	$s =~ s/^\s+|\s+$//g;
	return $s;
}

while(<READ>) {
	if($_ =~ /\sfrom\s/) {

		# 剔除干扰符号
		$_ =~ s/(import|from|\"|\'|;)//g;
		my $text = trim $_;
		my ($name, $url) = split ' ', $text;
		say "$name  $url";
	}
}