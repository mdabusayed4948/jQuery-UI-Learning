</div>

	</section>

		<section class="footer">
			<h2><script>document.write("Training with live project");</script></h2>
		</section>

	</section>

</div>	

<div id="gotoup"></div>
<script type="text/javascript">
	$(window).scroll(function(){
	if($(this).scrollTop()>200){
		$("#gotoup").fadeIn();
	}else{
		$("#gotoup").fadeOut();
	}
});

$("#gotoup").click(function(){
	$("html, body").animate({
		scrollTop:0
	}, 500);
});
</script>
</body>
</html>