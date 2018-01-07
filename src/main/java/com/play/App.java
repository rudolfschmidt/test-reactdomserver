package com.play;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class App {
	public static void main(String[] args) throws IOException, ScriptException {
		final ScriptEngineManager manager = new ScriptEngineManager();
		final ScriptEngine engine = manager.getEngineByName("js");
		engine.eval(Files.newBufferedReader(Paths.get("ui/dist/main.js")));
	}
}